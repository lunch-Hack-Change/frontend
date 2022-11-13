import React from 'react';
import './App.css';

import { Auth } from './auth/auth';
import { Provider } from 'react-redux'
import store from './common/store';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Registration } from './auth/registration';
import { ProfilePage } from './auth/profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#490E84'
    },
    secondary: {
      main: '#5940A9'
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Montserrat',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/'>
              <Route index element={<ProfilePage />}/>
              <Route path='/sign-up' element={<Registration />} />
              <Route path='/login' element={<Auth />}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
