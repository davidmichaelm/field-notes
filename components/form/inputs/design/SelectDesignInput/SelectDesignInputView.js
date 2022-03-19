import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import BaseDesignInput from '../BaseDesignInput';

export default function SelectDesignInputView(props) {
  const {
    input: { dependsOn, options, text }, containerStyle, parentFieldOptions, ...rest
  } = props;

  return (
    <BaseDesignInput
      containerStyle={containerStyle}
      {...rest}
    >
      {text}
      <Box sx={{ pl: 4 }}>
        {!dependsOn && options.map((item) => (
          <Typography
            color="gray"
            key={item.id}
          >
            {!parentFieldOptions && item.text}
          </Typography>
        ))}
        {dependsOn && parentFieldOptions.map((parentFieldOption) => {
          const filteredOptions = options
            .filter((option) => option.parentId === parentFieldOption.id)
            .map((option) => option.text);
          return (
            <Typography
              color="gray"
              key={parentFieldOption.id}
            >
              {parentFieldOption.text}
              {': '}
              {options && filteredOptions.join(', ')}
              {filteredOptions.length === 0 && '(No options)'}
            </Typography>
          );
        })}
      </Box>
    </BaseDesignInput>
  );
}

SelectDesignInputView.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
  parentFieldOptions: PropTypes.array,
};
