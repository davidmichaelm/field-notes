import DashboardIcon from '@mui/icons-material/Dashboard';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import MainLayout from '../components/layout/MainLayout';

function Dashboard() {
  return (
    <MainLayout
      title="Dashboard"
      icon={(
        <DashboardIcon
          color="secondary"
          sx={{ fontSize: '2.5rem' }}
        />
      )}
    />
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Dashboard);
