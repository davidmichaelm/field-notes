import { Button, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { inputTypes } from '../inputs';

function FormEntryLayout(props) {
  const { schema } = props;

  const [selectedParents, setSelectedParents] = useState({});
  const handleParentSelect = (event) => {
    setSelectedParents((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          width="100%"
          maxWidth="60rem"
          marginBottom={4}
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
              sx={{ width: '100%' }}
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
  schema: PropTypes.array,
};

export default FormEntryLayout;
