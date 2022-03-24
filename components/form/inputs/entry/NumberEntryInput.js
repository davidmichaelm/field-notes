import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import BaseEntryInput from './BaseEntryInput';

function NumberEntryInput(props) {
  const { input } = props;
  const { register } = useFormContext();

  return (
    <BaseEntryInput>
      {input.text}
      <TextField
        placeholder="Enter a number"
        variant="standard"
        type="number"
        {...register(input.name)}
      />
    </BaseEntryInput>
  );
}

NumberEntryInput.propTypes = {
  input: PropTypes.object,
};

export default NumberEntryInput;
