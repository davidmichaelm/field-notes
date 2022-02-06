import {
  Box, Button, IconButton, ListItem, Stack, TextField,
} from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';

export default function SelectInputEdit(props) {
  const {
    input, containerStyle, onSave, onCancel, ...rest
  } = props;
  const { control, register, handleSubmit } = useForm({
    defaultValues: { options: input.options },
  });
  const {
    fields, append, remove,
  } = useFieldArray({
    control,
    name: 'options', // TODO: unique name for your Field Array
    keyName: 'key',
  });

  const removeOption = (index) => {
    remove(index);
  };

  const addOption = () => {
    append({
      id: uuid(),
      text: '',
    });
  };

  return (
    <form onSubmit={handleSubmit((data) => onSave(data))}>
      <BaseInput
        containerStyle={{ p: 2, pt: 1, ...containerStyle }}
        selected
        component={ListItem}
        {...rest}
      >
        <Box sx={{ mb: 1 }}>
          {input.text}
        </Box>
        {fields.map((option, index) => (
          <Stack
            direction="row"
            spacing={1}
            key={option.key}
          >
            <TextField
              defaultValue={option.text}
              {...register(`options.${index}.text`)}
              autoFocus={!option.text}
              fullWidth
              size="small"
            />
            <IconButton
              sx={{
                borderRadius: 1,
                ':hover': {
                  backgroundColor: (theme) => theme.palette.error.light,
                  color: 'white',
                },
              }}
              onClick={() => removeOption(index)}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Stack>

        ))}
        <Box>
          <Button
            startIcon={<AddCircleIcon />}
            color="secondary"
            sx={{ textTransform: 'none' }}
            onClick={addOption}
          >
            Add new option
          </Button>
        </Box>

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
      </BaseInput>
    </form>
  );
}

SelectInputEdit.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};
