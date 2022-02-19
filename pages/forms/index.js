import {
  List, ListItemButton, ListItemText, Skeleton, Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import MainLayout from '../../components/layout/MainLayout';

function Forms() {
  const user = useAuthUser();
  const [forms, setForms] = useState([{ id: '' }]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchForms = async () => {
      setError(false);
      setLoading(true);

      try {
        const db = firebase.firestore();
        const userDoc = await db.collection('users').doc(user.email).get();
        const { forms: formRefs } = userDoc.data();
        if (!formRefs) return;

        const results = await Promise.all(formRefs.map((formRef) => formRef.get()));
        setForms(results.map((result) => ({
          ...result.data(),
          id: result.id,
        })));
      } catch (e) {
        setError(true);
      }

      setLoading(false);
    };

    if (!user.id) return;
    fetchForms();
  }, [user]);

  return (
    <MainLayout
      title="Forms"
      icon={(
        <ArticleIcon
          color="secondary"
          sx={{ fontSize: '2.5rem' }}
        />
      )}
      error={error}
    >
      <Typography
        variant="h5"
        color="primary"
        sx={{ mb: 1 }}
      >
        Created by you
      </Typography>
      <List sx={{
        width: '100%',
      }}
      >
        {forms.map((form) => (
          <Link
            href={`/forms/${form.id}`}
            key={form.id}
            passHref
          >
            <ListItemButton sx={{
              backgroundColor: (theme) => theme.palette.grey['200'],
              borderRadius: 1,
              mb: 1,
            }}
            >
              <ListItemText>
                {loading
                  ? <Skeleton />
                  : form.title}
              </ListItemText>
            </ListItemButton>
          </Link>

        ))}
      </List>

    </MainLayout>
  );
}

export default withAuthUser()(Forms);
