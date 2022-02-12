import { CircularProgress } from '@mui/material';
import LoginLayout from '../layout/LoginLayout';

export default function LoginLoading() {
  return (
    <LoginLayout>
      <CircularProgress />
    </LoginLayout>
  );
}
