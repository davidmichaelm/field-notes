import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import BaseEntryInput from './BaseEntryInput';

function NumberEntryInput(props) {
  const { input } = props;
  const { register, formState: { errors } } = useFormContext();
  const fieldErrors = errors[input.id];

  return (
    <BaseEntryInput>
      {input.text}
      <TextField
        placeholder="Enter a number"
        variant="standard"
        type="number"
        error={!!fieldErrors}
        helperText={fieldErrors && 'Enter a number 0 or greater'}
        {...register(input.id, {
          required: true,
          valueAsNumber: true,
          validate: (value) => value >= 0,
        })}
      />
    </BaseEntryInput>
  );
}

NumberEntryInput.propTypes = {
  input: PropTypes.object,
};

export default NumberEntryInput;
