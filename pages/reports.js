import {
  Box,
} from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MainLayout from '../components/MainLayout';

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
