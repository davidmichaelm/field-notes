import { MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import BaseEntryInput from './BaseEntryInput';

function SelectEntryInput(props) {
  const { input, onSelect, selectedParent } = props;
  const { register } = useFormContext();

  const options = input.dependsOn
    ? input.options.filter((option) => option.parentId === selectedParent)
    : input.options;

  return (
    <BaseEntryInput>
      {input.text}
      <Select
        id={input.id}
        defaultValue=""
        {...register(input.name, {
          onChange: onSelect,
        })}
        // Causes a nextjs hydration error -- has to do with emotion?
        // disabled={(input.dependsOn && !selectedParent) || options.length === 0}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            value={option.id}
          >
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </BaseEntryInput>
  );
}

SelectEntryInput.propTypes = {
  input: PropTypes.object,
  onSelect: PropTypes.func,
  selectedParent: PropTypes.string,
};

export default SelectEntryInput;
