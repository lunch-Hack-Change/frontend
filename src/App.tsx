import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: '#490E84',
    secondary: '#0A0A0A'
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </div>
  );
}

export default App;
