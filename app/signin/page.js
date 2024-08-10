"use client";

import { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simple validation against the stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      router.push('/dashboard'); // Redirect to the dashboard if credentials are valid
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background: 'linear-gradient(135deg, #ff6f61, #ffffff)',
        width: '100vw',
      }}
      px={2}
    >
      <Typography
        variant="h4"
        sx={{ color: '#ff6f61', mb: 4, fontWeight: 'bold', textTransform: 'uppercase' }}
      >
        User Login
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Username"
        sx={{
          mb: 2,
          width: '300px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '30px',
          input: { color: '#333' },
        }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon sx={{ color: '#ff6f61' }} />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        variant="outlined"
        type="password"
        placeholder="Password"
        sx={{
          mb: 2,
          width: '300px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '30px',
          input: { color: '#333' },
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon sx={{ color: '#ff6f61' }} />
            </InputAdornment>
          ),
        }}
      />

      {error && (
        <Typography
          variant="body2"
          sx={{ color: 'red', mb: 2 }}
        >
          {error}
        </Typography>
      )}

      <Button
        variant="contained"
        sx={{
          width: '300px',
          backgroundColor: '#ff6f61',
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: '#ff8a75',
          },
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
