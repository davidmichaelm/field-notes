import PropTypes from 'prop-types';
import { List } from '@mui/material';
import inputTypes from './inputTypes/inputTypes';

export default function FormInputs(props) {
  const { formInputs, onInputSave } = props;

  return (
    <List sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
    >
      {formInputs.map((input) => {
        const Input = inputTypes[input.type];
        const onSave = input.type === 'select' ? { onSave: onInputSave } : null;

        const parentField = input.dependsOn
          ? formInputs.find((parentInput) => parentInput.name === input.dependsOn)
          : null;
        const parentFieldOptions = parentField ? { parentFieldOptions: parentField.options } : null;

        return (
          <Input
            key={input.id}
            input={input}
            {...parentFieldOptions}
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
