"use client";

import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function AddItem() {
  const router = useRouter();
  const [newItem, setNewItem] = useState({ name: '', quantity: 1 });

  const handleAddItem = () => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const updatedItems = [...storedItems, newItem];
    localStorage.setItem('items', JSON.stringify(updatedItems));
    router.push('/dashboard'); // Redirect to dashboard after adding
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ background: 'linear-gradient(135deg, #ff6f61, #ffffff)', width: '100vw' }}
      px={2}
    >
      <Typography variant="h4" sx={{ color: '#ff6f61', mb: 4, fontWeight: 'bold', textTransform: 'uppercase' }}>
        Add New Item
      </Typography>
      <TextField
        label="Product Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        type="number"
        fullWidth
        sx={{ mb: 4 }}
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ff6f61',
          color: '#fff',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#ff8a75',
          },
        }}
        onClick={handleAddItem}
      >
        Add Item
      </Button>
    </Box>
  );
}
