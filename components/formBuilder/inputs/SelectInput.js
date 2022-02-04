import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BaseInput from './BaseInput';

export default function SelectInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseInput
      containerStyle={containerStyle}
      {...rest}
    >
      {input.text}
      <Box sx={{ pl: 4 }}>
        {input.options.map((item) => (
          <Typography
            color="gray"
            key={item.id}
          >
            {item.text}
          </Typography>
        ))}
      </Box>
    </BaseInput>
  );
}

SelectInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
