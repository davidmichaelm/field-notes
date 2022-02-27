import { InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import EventIcon from '@mui/icons-material/Event';
import BaseInput from './BaseInput';

export default function DateInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseInput
      containerStyle={containerStyle}
      {...rest}
    >
      {input.text}
      <TextField
        disabled
        placeholder="Date field"
        variant="standard"
        sx={{ width: '300px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EventIcon />
            </InputAdornment>
          ),
        }}
      />
    </BaseInput>
  );
}

DateInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
