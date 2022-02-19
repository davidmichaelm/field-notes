import {
  Box, IconButton, Skeleton, Typography,
} from '@mui/material';
import Head from 'next/head';
import PropTypes from 'prop-types';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';
import MainNavbar from './MainNavbar';
import MainLayoutError from './MainLayoutError';

function MainLayout({
  title, icon, loading, error, children,
}) {
  const user = useAuthUser();

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>
          {loading
            ? 'Loading...'
            : title}
          {' '}
          - Field Notes
        </title>
      </Head>
      <MainNavbar />
      <Box sx={{ width: '100%' }}>
        <Box sx={{
          p: 2,
          height: '6rem',
          width: '100%',
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
              {loading
                ? <Skeleton width={300} />
                : ` ${title}`}
            </Typography>
            <IconButton
              sx={{ ml: 'auto' }}
              onClick={() => user.signOut()}
            >
              <LogoutIcon />
            </IconButton>
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
            {error
              ? <MainLayoutError />
              : children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node,
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(MainLayout);
