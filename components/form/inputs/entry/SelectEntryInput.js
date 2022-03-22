import { MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import BaseEntryInput from './BaseEntryInput';

function SelectEntryInput(props) {
  const { input, onSelect, selectedParent } = props;

  const options = input.dependsOn
    ? input.options.filter((option) => option.parentId === selectedParent)
    : input.options;

  return (
    <BaseEntryInput>
      {input.text}
      <Select
        id={input.id}
        defaultValue=""
        name={input.name}
        onChange={onSelect}
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
