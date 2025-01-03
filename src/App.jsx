import { useState } from 'react'
import './App.css'
import { UserContext, UserProvider } from './contexts/UserContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { IssuesContext, IssuesProvider } from './contexts/IssuesContext';
import AddIssue from './pages/AddIssue';
import IssueDetails from './pages/IssueDetail';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <UserProvider>
        <IssuesProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/addissue' element={<AddIssue />} />
              <Route path='/issue/:id' element={<IssueDetails />} />
            </Routes>
          </Router>
        </IssuesProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
