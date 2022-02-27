import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';

export default function SelectInputView(props) {
  const {
    input, containerStyle, parentFieldOptions, ...rest
  } = props;

  return (
    <BaseInput
      containerStyle={containerStyle}
      {...rest}
    >
      {input.text}
      <Box sx={{ pl: 4 }}>
        {input.options.map((item) => {
          const parentFieldOption = parentFieldOptions?.find((option) => option.id === item.id);
          if (parentFieldOption) {
            return (
              <Typography
                color="gray"
                key={item.id}
              >
                {parentFieldOption.text}
                {': '}
                {item.options?.map((itemOption) => (
                  itemOption.text
                )).join(', ')}
              </Typography>
            );
          }

          return (
            <Typography
              color="gray"
              key={item.id}
            >
              {!parentFieldOptions && item.text}
            </Typography>
          );
        })}
      </Box>
    </BaseInput>
  );
}

SelectInputView.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
  parentFieldOptions: PropTypes.array,
};
