import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import BaseEntryInput from './BaseEntryInput';
import singleInputTypes from './singleEntryInputTypes';

function GroupEntryInput(props) {
  const { input } = props;
  return (
    <BaseEntryInput>
      {input.text}
      {input.inputs.map((item) => {
        const Input = singleInputTypes[item.type];

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
    </BaseEntryInput>
  );
}

GroupEntryInput.propTypes = {
  input: PropTypes.object,
};

export default GroupEntryInput;
