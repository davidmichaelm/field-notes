import PropTypes from 'prop-types';
import { List } from '@mui/material';
import inputTypes from '../inputs/inputTypes';

export default function FormDesignLayout(props) {
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
          ? formInputs.find((parentInput) => parentInput.id === input.dependsOn)
          : null;
        const parentFieldOptions = parentField ? { parentFieldOptions: parentField.options } : null;

        return (
          <Input
            key={input.id}
            design
            input={input}
            {...parentFieldOptions}
            {...onSave}
          />
        );
      })}
    </List>
  );
}

FormDesignLayout.propTypes = {
  formInputs: PropTypes.array,
  onInputSave: PropTypes.func,
};
