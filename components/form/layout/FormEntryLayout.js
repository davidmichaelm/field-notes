import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { inputTypes } from '../inputs';

function FormEntryLayout(props) {
  const { formId, schema } = props;

  const methods = useForm({ mode: 'onChange' });
  const onSubmit = async (data) => {
    try {
      await firebase.firestore()
        .collection('forms')
        .doc(formId)
        .collection('submissions')
        .add({
          data,
        });
      console.log('done!');
    } catch (e) {
      console.log(e);
    }
  };

  const [selectedParents, setSelectedParents] = useState({});
  const handleParentSelect = (event) => {
    schema.forEach((input) => {
      if (input.dependsOn === event.target.name) {
        methods.resetField(input.id);
      }
    });

    setSelectedParents((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          spacing={1}
          width="100%"
          marginBottom={2}
        >
          {schema?.map((input) => {
            const { type, dependsOn, id } = input;

            const Input = inputTypes[type];
            const onSelect = type === 'select'
              ? { onSelect: handleParentSelect }
              : null;
            const selectedParent = type === 'select' && dependsOn
              ? { selectedParent: selectedParents[dependsOn] }
              : null;

            return (
              <Input
                key={id}
                input={input}
                design={false}
                {...onSelect}
                {...selectedParent}
              />
            );
          })}
          <Stack
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: '90%', mt: 2 }}
            >
              Submit Form
            </Button>
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
}

FormEntryLayout.propTypes = {
  formId: PropTypes.string,
  schema: PropTypes.array,
};

export default FormEntryLayout;
