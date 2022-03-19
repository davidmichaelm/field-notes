import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@mui/material';
import BaseDesignInput from './BaseDesignInput';
import singleDesignInputTypes from './singleDesignInputTypes';

export default function GroupDesignInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseDesignInput
      containerStyle={containerStyle}
      {...rest}
    >
      {input.text}
      {input.inputs.map((item) => {
        const Input = singleDesignInputTypes[item.type];

        return (
          <React.Fragment key={item.id}>
            <Input
              key={input.id}
              input={item}
              containerStyle={{
                mt: 0, p: 0, pl: 4, backgroundColor: 'none',
              }}
              component={Box}
            />
          </React.Fragment>
        );
      })}
    </BaseDesignInput>
  );
}

GroupDesignInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
