import InsertChartIcon from '@mui/icons-material/InsertChart';
import MainLayout from '../components/layout/MainLayout';

export default function Forms() {
  return (
    <MainLayout
      title="Reports"
      icon={(
        <InsertChartIcon
          color="secondary"
          sx={{ fontSize: '2.5rem' }}
        />
)}
    />
  );
}
