import { IconButton, Stack, TextField } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';

export default function OptionEdit(props) {
  const {
    option, index, register, onRemoveOption,
  } = props;

  const registerAs = `options.${index}.text`;

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <TextField
        defaultValue={option.text}
        {...register(registerAs)}
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
        onClick={() => onRemoveOption(index)}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
    </Stack>
  );
}

OptionEdit.propTypes = {
  option: PropTypes.object,
  index: PropTypes.number,
  register: PropTypes.func,
  onRemoveOption: PropTypes.func,
};
