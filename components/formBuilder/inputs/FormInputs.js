import PropTypes from 'prop-types';
import { List } from '@mui/material';
import inputTypes from './inputTypes/inputTypes';

export default function FormInputs(props) {
  const { formInputs, onInputSave } = props;

  return (
    <List sx={{ width: '100%' }}>
      {formInputs.map((input) => {
        const Input = inputTypes[input.type];
        const onSave = input.type === 'select' ? { onSave: onInputSave } : null;
        return (
          <Input
            key={input.id}
            input={input}
            {...onSave}

          />
        );
      })}
    </List>
  );
}

FormInputs.propTypes = {
  formInputs: PropTypes.array,
  onInputSave: PropTypes.func,
};
