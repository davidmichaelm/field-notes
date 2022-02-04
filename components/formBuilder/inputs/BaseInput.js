import {
  Box,
  ListItemButton, ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function BaseInput(props) {
  const {
    children, containerStyle, textStyle, nested = false, ...rest
  } = props;

  const Element = nested ? Box : ListItemButton;

  return (
    <Element
      sx={{
        backgroundColor: (theme) => (nested ? 'none' : theme.palette.grey['200']),
        mt: 2,
        borderRadius: 1,
        ...containerStyle,
      }}
      {...rest}
    >
      <ListItemText primaryTypographyProps={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mb: 1,
        ...textStyle,
      }}
      >
        {children}
      </ListItemText>
    </Element>
  );
}

BaseInput.propTypes = {
  children: PropTypes.node,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  nested: PropTypes.bool,
};
