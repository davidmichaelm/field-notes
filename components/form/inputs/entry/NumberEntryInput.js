import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import BaseEntryInput from './BaseEntryInput';

function NumberEntryInput(props) {
  const { input } = props;
  const { register, formState: { errors } } = useFormContext();
  const fieldErrors = errors[input.name];

  return (
    <BaseEntryInput>
      {input.text}
      <TextField
        placeholder="Enter a number"
        variant="standard"
        type="number"
        error={!!fieldErrors}
        helperText={fieldErrors && 'Enter a number 0 or greater'}
        {...register(input.name, { required: true, pattern: /^[0-9]\d*$/ })}
      />
    </BaseEntryInput>
  );
}

NumberEntryInput.propTypes = {
  input: PropTypes.object,
};

export default NumberEntryInput;
