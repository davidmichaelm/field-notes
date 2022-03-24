import {
  Alert,
  Backdrop,
  Button, CircularProgress, Dialog, DialogContent, Snackbar, Stack, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/firestore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { inputTypes } from '../inputs';

function FormEntryLayout(props) {
  const { formId, schema } = props;
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitComplete, setSubmitComplete] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const methods = useForm({ mode: 'onChange' });
  const onSubmit = async (data) => {
    try {
      setSubmitLoading(true);
      await firebase.firestore()
        .collection('forms')
        .doc(formId)
        .collection('submissions')
        .add({
          data,
        });
      setSubmitComplete(true);
    } catch (e) {
      setSubmitError(true);
    } finally {
      setSubmitLoading(false);
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
    <>
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

      <Backdrop open={submitLoading}>
        <CircularProgress sx={{ color: 'white' }} />
      </Backdrop>

      <Dialog
        open={submitComplete}
        fullWidth
      >
        <DialogContent>
          <Stack alignItems="center">
            <Typography
              variant="h4"
              textAlign="center"
            >
              Form submitted!
            </Typography>

            <CheckCircleOutlineIcon sx={{ fontSize: '10rem', color: (theme) => theme.palette.primary.main }} />

            <Typography textAlign="center">
              Thank you for your responses. You can close this page.
            </Typography>
          </Stack>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={submitError}
        onClose={() => setSubmitError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
      >
        <Alert
          severity="error"
        >
          Something went wrong. Please try submitting the form again.
          If the problem continues, contact the site administrator.
        </Alert>
      </Snackbar>
    </>
  );
}

FormEntryLayout.propTypes = {
  formId: PropTypes.string,
  schema: PropTypes.array,
};

export default FormEntryLayout;
