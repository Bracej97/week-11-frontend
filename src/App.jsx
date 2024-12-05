import { useState } from 'react'
import './App.css'
import { UserContext, UserProvider } from './contexts/UserContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
