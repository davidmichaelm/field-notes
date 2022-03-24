import { ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

function BaseEntryInput(props) {
  const { children } = props;
  return (
    <ListItem component="div">
      <ListItemText primaryTypographyProps={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
      >
        {children}
      </ListItemText>
    </ListItem>
  );
}

BaseEntryInput.propTypes = {
  children: PropTypes.node,
};

export default BaseEntryInput;
