import PropTypes from 'prop-types';
import { List } from '@mui/material';
import inputTypes from './inputTypes/inputTypes';

export default function FormInputs(props) {
  const { formInputs } = props;

  return (
    <List sx={{ width: '100%' }}>
      {formInputs.map((input) => {
        const Input = inputTypes[input.type];
        return (
          <Input
            key={input.id}
            input={input}
          />
        );
      })}
    </List>
  );
}

FormInputs.propTypes = {
  formInputs: PropTypes.array,
};
