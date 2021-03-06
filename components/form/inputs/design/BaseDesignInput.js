import {
  ListItemButton, ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function BaseDesignInput(props) {
  const {
    children, containerStyle, textStyle, component, ...rest
  } = props;

  const Element = component || ListItemButton;

  return (
    <Element
      sx={{
        backgroundColor: (theme) => (theme.palette.grey['200']),
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

BaseDesignInput.propTypes = {
  children: PropTypes.node,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  component: PropTypes.object,
};
