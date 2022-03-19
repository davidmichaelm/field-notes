import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';

export default function AddOptionButton(props) {
  const { onAddOption } = props;
  return (
    <Button
      startIcon={<AddCircleIcon />}
      color="secondary"
      sx={{ textTransform: 'none' }}
      onClick={onAddOption}
    >
      Add new option
    </Button>
  );
}

AddOptionButton.propTypes = {
  onAddOption: PropTypes.func,
};
