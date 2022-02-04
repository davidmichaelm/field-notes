import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';

export default function NumberInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseInput
      containerStyle={containerStyle}
      {...rest}
    >
      {input.text}
      <TextField
        disabled
        placeholder="Number field"
        variant="standard"
        sx={{ width: '300px' }}
      />
    </BaseInput>
  );
}

NumberInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
