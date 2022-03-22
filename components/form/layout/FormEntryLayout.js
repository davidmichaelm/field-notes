import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
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

  return (
    <Stack
      spacing={2}
      width="40rem"
      maxWidth="100%"
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
    </Stack>
  );
}

FormEntryLayout.propTypes = {
  schema: PropTypes.array,
};

export default FormEntryLayout;
