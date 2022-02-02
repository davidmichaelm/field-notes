import DashboardIcon from '@mui/icons-material/Dashboard';
import MainLayout from '../components/MainLayout';

export default function Dashboard() {
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
