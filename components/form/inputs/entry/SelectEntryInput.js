import { FormHelperText, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import BaseEntryInput from './BaseEntryInput';

function SelectEntryInput(props) {
  const { input, onSelect, selectedParent } = props;
  const { control } = useFormContext();

  const options = input.dependsOn
    ? input.options.filter((option) => option.parentId === selectedParent)
    : input.options;

  return (
    <BaseEntryInput>
      {input.text}
      <Controller
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({
          field: {
            onChange, onBlur, value, name, ref,
          },
          fieldState: { error },
        }) => (
          <>
            <Select
              id={input.id}
              error={!!error}
              onChange={(event) => {
                onSelect(event);
                onChange(event);
              }}
              onBlur={onBlur}
              name={name}
              value={value}
              inputRef={ref}
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
            {error && <FormHelperText error>This field is required</FormHelperText>}
          </>
        )}
        name={input.id}
      />
    </BaseEntryInput>
  );
}

SelectEntryInput.propTypes = {
  input: PropTypes.object,
  onSelect: PropTypes.func,
  selectedParent: PropTypes.string,
};

export default SelectEntryInput;
