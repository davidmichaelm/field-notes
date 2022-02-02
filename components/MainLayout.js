import {
  Box, Typography,
} from '@mui/material';
import Head from 'next/head';
import PropTypes from 'prop-types';
import MainNavbar from './MainNavbar';

export default function MainLayout({
  title, icon, children,
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>
          Field Notes -
          {' '}
          {title}
        </title>
      </Head>
      <MainNavbar />
      <Box sx={{ width: '100%' }}>
        <Box sx={{
          p: 2,
          height: '6rem',
          width: '100%',

          alignItems: 'flex-start',
        }}
        >
          <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
          }}
          >
            <Typography>
              {icon}
            </Typography>
            <Typography
              variant="h4"
            >
              {' '}
              {title}
            </Typography>
          </Box>
        </Box>

        <Box
          component="main"
          sx={{
            p: 2,
            pt: 0,
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            width: '100%', maxWidth: '60rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
};
