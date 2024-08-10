"use client";

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Fab, AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);  // State to track the row being edited
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    router.push('/'); // Redirect to landing page on logout
  };

  const handleSave = (index) => {
    localStorage.setItem('items', JSON.stringify(items));
    setEditIndex(-1); // Exit edit mode
  };

  const handleModify = (index) => {
    setEditIndex(index);
  };

  const handleInputChange = (e, index, field) => {
    const updatedItems = [...items];
    updatedItems[index][field] = e.target.value;
    setItems(updatedItems);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', background: 'linear-gradient(135deg, #ff6f61, #ffffff)', position: 'relative' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#ff6f61' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Pantry Tracker
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <Avatar sx={{ bgcolor: '#ffffff', color: '#ff6f61' }}>P</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box display="flex" flexDirection="column" alignItems="center" p={4}>
        <Typography variant="h4" sx={{ color: '#ff6f61', mb: 4, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}>
          Pantry Inventory
        </Typography>

        {/* Inventory Table */}
        <TableContainer component={Paper} sx={{ maxWidth: '90%', width: '100%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>PRODUCT</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>QUANTITY</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: 'center' }}>
                    {editIndex === index ? (
                      <TextField
                        value={item.name}
                        onChange={(e) => handleInputChange(e, index, 'name')}
                        sx={{ width: '100%' }}
                      />
                    ) : (
                      item.name
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    {editIndex === index ? (
                      <TextField
                        value={item.quantity}
                        onChange={(e) => handleInputChange(e, index, 'quantity')}
                        sx={{ width: '100%' }}
                        type="number"
                      />
                    ) : (
                      item.quantity
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    {editIndex === index ? (
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}  // Increased margin-right for spacing
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        sx={{ mr: 2, backgroundColor: '#ff6f61' }}  // Increased margin-right for spacing
                        onClick={() => handleModify(index)}
                      >
                        Modify
                      </Button>
                    )}
                    <Button variant="contained" color="error" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            backgroundColor: '#ff6f61',
            '&:hover': { backgroundColor: '#ff8a75' },
          }}
          onClick={() => router.push('/add-item')}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
}
