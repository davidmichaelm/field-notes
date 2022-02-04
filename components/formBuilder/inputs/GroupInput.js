import PropTypes from 'prop-types';
import React from 'react';
import BaseInput from './BaseInput';
import singleInputTypes from './inputTypes/singleInputTypes';

export default function GroupInput(props) {
  const { input, containerStyle, ...rest } = props;
  return (
    <BaseInput
      containerStyle={containerStyle}
      {...rest}
    >
      {input.text}
      {input.inputs.map((item) => {
        const Input = singleInputTypes[item.type];

        return (
          <React.Fragment key={item.id}>
            <Input
              key={input.id}
              input={item}
              containerStyle={{ mt: 0, p: 0, pl: 4 }}
              nested
            />
          </React.Fragment>
        );
      })}
    </BaseInput>
  );
}

GroupInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
};
