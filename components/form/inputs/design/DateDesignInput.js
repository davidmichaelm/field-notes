import { InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import EventIcon from '@mui/icons-material/Event';
import BaseDesignInput from './BaseDesignInput';

export default function DateDesignInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseDesignInput
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
    </BaseDesignInput>
  );
}

DateDesignInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
