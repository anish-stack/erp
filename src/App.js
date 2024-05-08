import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import { SnackbarProvider, useSnackbar } from 'notistack'; // Import useSnackbar
import React from 'react';

function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
