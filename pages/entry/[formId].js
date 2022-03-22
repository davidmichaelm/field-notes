import { getFirebaseAdmin } from 'next-firebase-auth';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { fetchFormById } from '../../api/fetch';
import { FormEntryLayout } from '../../components/form/layout';

// eslint-disable-next-line no-unused-vars
export default function FormEntry({ formId, title, schema }) {
  return (
    <Stack
      alignItems="center"
      paddingX={1}
    >
      <Typography
        variant="h4"
        marginY={1}
      >
        {title}
      </Typography>
      <FormEntryLayout schema={schema} />

    </Stack>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { formId: '1' } }],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { formId } = context.params;

  const db = getFirebaseAdmin().firestore();
  const form = await fetchFormById(formId, db);

  return {
    props: {
      ...form,
    },
  };
}

FormEntry.propTypes = {
  formId: PropTypes.string,
  title: PropTypes.string,
  schema: PropTypes.array,
};
