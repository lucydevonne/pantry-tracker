"use client";

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/signin');
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      height="100vh"
      position="relative"
      bgcolor="linear-gradient(135deg, #ffffff, #f5f5f5)"
      px={2}
    >
      {/* Curved Gradient Background */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width="100%"
        height="100%"
        zIndex={0}
        sx={{ overflow: 'hidden' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff6f61', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ff6f61', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M 85 0 
               Q 60 25, 65 50
               T 50 100
               L 100 100 
               L 100 0 
               Z"
            fill="url(#gradient)"
          />
        </svg>
      </Box>

      {/* Left Side Content */}
      <Box
        sx={{
          maxWidth: '600px',
          color: '#333',
          textAlign: { xs: 'center', md: 'left' },
          zIndex: 2,
          ml: { xs: 0, md: -2 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#ff6f61',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
          gutterBottom
        >
          Pantry Tracker
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#333',
            my: 1,
            animation: 'fadeIn 2s ease-in-out',
          }}
          gutterBottom
        >
          Organize with ease
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#666',
            mb: 3,
            animation: 'fadeIn 2.5s ease-in-out',
          }}
        >
          Keep track of all your kitchen essentials, reduce waste, and never run out
          of your favorite ingredients.
        </Typography>

        {/* Buttons Container */}
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff6f61',
              color: '#fff',
              fontSize: '1.25rem',
              fontWeight: 500,
              py: 1.5,
              px: 4,
              borderRadius: '30px',
              textTransform: 'uppercase',
              letterSpacing: 1,
              '&:hover': {
                backgroundColor: '#ff8a75',
              },
            }}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#ff6f61',
              fontSize: '1.25rem',
              fontWeight: 500,
              py: 1.5,
              px: 4,
              borderRadius: '30px',
              textTransform: 'uppercase',
              letterSpacing: 1,
              borderColor: '#ff6f61',
              '&:hover': {
                borderColor: '#ff8a75',
                color: '#ff8a75',
              },
            }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Right Side Content */}
      <Box
        width={{ xs: '100%', md: '45%' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        zIndex={1}
        sx={{ ml: { md: -2 } }}
      >
        <Box
          component="img"
          src="/images/pantry.jpeg"
          alt="Dish Image"
          sx={{
            width: '70%',
            borderRadius: '50%',
            boxShadow: 5,
            transform: 'translateX(-10px)',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>
    </Box>
  );
}
