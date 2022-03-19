import { Skeleton, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layout/MainLayout';
import { FormDesignLayout } from '../../components/form/layout';

export default function Form() {
  const router = useRouter();
  const { formId } = router.query;

  const [title, setTitle] = useState('');
  const [formInputs, setFormInputs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchForm = async () => {
      setError(false);
      setLoading(true);

      try {
        const db = firebase.firestore();
        const form = await db.collection('forms').doc(formId).get();
        if (form.exists) {
          const data = form.data();
          setTitle(data.title);
          setFormInputs(data.schema);
        } else {
          setTitle('Not Found');
          router.push('./');
        }
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };

    if (!formId) return;
    fetchForm();
  }, [formId, router]);

  const handleInputSave = (input) => {
    const updatedInputs = formInputs.map((i) => (i.id === input.id ? input : i));
    setFormInputs(updatedInputs);

    const db = firebase.firestore();
    db.collection('forms').doc(formId)
      .set(
        {
          schema: updatedInputs,
        },
        { merge: true },
      );
  };

  return (
    <MainLayout
      title={title}
      icon={(
        <ArticleIcon
          color="secondary"
          sx={{ fontSize: '2.5rem' }}
        />
      )}
      loading={loading}
      error={error}
    >
      <Typography
        variant="h5"
        color="primary"
        sx={{ mb: 1 }}
      >
        {loading ? <Skeleton width={300} /> : 'Form questions' }
      </Typography>

      <FormDesignLayout
        formInputs={formInputs}
        onInputSave={handleInputSave}
      />
    </MainLayout>
  );
}
