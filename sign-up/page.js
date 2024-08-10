"use client";

import { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  const handleSignUp = () => {
    // Here you would handle the actual sign-up logic, like API requests to a backend
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setAccountCreated(true);
    setTimeout(() => {
      router.push('/signin'); // Redirect to the login page after showing success message
    }, 2000);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background: 'linear-gradient(135deg, #ff6f61, #ffffff)', // Gradient from theme color to white
        width: '100vw',
      }}
      px={2}
    >
      {!accountCreated ? (
        <>
          <Typography
            variant="h4"
            sx={{ color: '#ff6f61', mb: 4, fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            User Signup
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
              mb: 4,
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
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </>
      ) : (
        <Typography
          variant="h4"
          sx={{ color: '#ff6f61', fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          Account Created Successfully!
        </Typography>
      )}
    </Box>
  );
}
