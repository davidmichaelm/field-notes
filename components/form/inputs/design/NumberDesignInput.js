import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import BaseDesignInput from './BaseDesignInput';

export default function NumberDesignInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseDesignInput
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
    </BaseDesignInput>
  );
}

NumberDesignInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
