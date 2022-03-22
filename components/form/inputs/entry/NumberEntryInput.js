import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import BaseEntryInput from './BaseEntryInput';

function NumberEntryInput(props) {
  const { input } = props;
  return (
    <BaseEntryInput>
      {input.text}
      <TextField
        placeholder="Enter a number"
        variant="standard"
        type="number"
      />
    </BaseEntryInput>
  );
}

NumberEntryInput.propTypes = {
  input: PropTypes.object,
};

export default NumberEntryInput;
