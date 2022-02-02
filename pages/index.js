import Head from 'next/head';
import {
  Box, Typography, Paper, Button,
} from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Field Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
          <Paper
            sx={{
              height: '100%',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#568259',
              borderRadius: 0,
            }}
            elevation={24}
          >
            <Typography variant="h1" fontWeight="regular" fontSize="4rem" color="white">
              Field Notes
            </Typography>
          </Paper>
          <Box sx={{
            height: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Link href="/dashboard">
              <Button>Login</Button>
            </Link>
          </Box>
        </Box>
      </main>
    </>
  );
}
