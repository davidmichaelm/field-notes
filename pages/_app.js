import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'styles/globals.css';
import PropTypes from 'prop-types';
import initAuth from '../auth/initAuth';

initAuth();

const theme = createTheme({
  palette: {
    primary: {
      main: '#568259',
    },
    secondary: {
      main: '#566982',
    },
  },
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
