import { Stack, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

export default function MainLayoutError() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      sx={{
        background: (theme) => theme.palette.grey[300],
        padding: 2,
        borderRadius: 1,
      }}
    >
      <Typography>
        <ErrorIcon
          color="error"
          sx={{ fontSize: '3.5rem' }}
        />
      </Typography>

      <Typography
        variant="h4"
        fontSize="2rem"
      >
        Something went wrong
      </Typography>
      <Typography>
        Try reloading the page. If the problem persists, contact the site administrator.
      </Typography>
    </Stack>
  );
}
