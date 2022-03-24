import {
  Box, Button, ListItem, Stack, Typography,
} from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import BaseDesignInput from '../BaseDesignInput';
import OptionEdit from './OptionEdit';
import AddOptionButton from './AddOptionButton';

export default function SelectDesignInputEdit(props) {
  const {
    input, containerStyle, parentFieldOptions, onSave, onCancel, ...rest
  } = props;

  const defaultOptions = parentFieldOptions
    ? input.options?.map((option) => ({
      ...option,
      parentField: parentFieldOptions[option.parentId].text,
      parentId: option.parentId,
    }))
    : input.options;

  const { control, register, handleSubmit } = useForm({
    defaultValues: { options: defaultOptions },
  });
  const {
    fields, append, remove,
  } = useFieldArray({
    control,
    name: 'options',
    keyName: 'key',
  });

  const removeOption = (index) => {
    remove(index);
  };

  const addOption = (parentOption) => {
    append({
      id: uuid(),
      text: '',
      ...(parentOption ? {
        parentId: parentOption.id,
        parentField: parentOption.text,
      } : null),

    });
  };

  const fieldsByParentField = fields.reduce((accumulator, value) => {
    const { parentField } = value;
    if (!accumulator[parentField]) {
      accumulator[parentField] = [];
    }

    accumulator[parentField].push(value);

    return accumulator;
  }, {});

  return (
    <form onSubmit={handleSubmit((data) => onSave(data))}>
      <BaseDesignInput
        containerStyle={{ p: 2, pt: 1, ...containerStyle }}
        selected
        component={ListItem}
        {...rest}
      >
        <Box sx={{ mb: 1 }}>
          {input.text}
        </Box>
        {parentFieldOptions && parentFieldOptions.map((parentOption) => (
          <Stack
            gap={1}
            key={parentOption.id}
          >
            <Typography>{parentOption.text}</Typography>
            {fieldsByParentField[parentOption.text]?.map((option) => (
              <OptionEdit
                option={option}
                index={fields.indexOf(option)}
                parentOption={parentOption}
                register={register}
                onRemoveOption={removeOption}
                key={option.key}
              />
            ))}
            <Box>
              <AddOptionButton onAddOption={() => addOption(parentOption)} />
            </Box>
          </Stack>
        ))}
        {!parentFieldOptions && (
        <>
          {fields.map((option, index) => (
            <OptionEdit
              option={option}
              index={index}
              register={register}
              onRemoveOption={removeOption}
              key={option.key}
            />
          ))}
          <Box>
            <AddOptionButton onAddOption={() => addOption()} />
          </Box>
        </>
        )}

        <Box sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        }}
        >
          <Button
            variant="outlined"
            onClick={onCancel}
            sx={{ flex: 1 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ flex: 1 }}
            type="submit"
          >
            Save
          </Button>
        </Box>
      </BaseDesignInput>
    </form>
  );
}

SelectDesignInputEdit.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
  parentFieldOptions: PropTypes.array,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};
