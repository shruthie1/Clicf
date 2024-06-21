import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import User from './pages/user/User';
import UserData from './pages/user-data/UserData'; // Example additional page
import Client from './pages/clients/Client'; // Example additional page
import Configuration from './pages/configuration/Configuration'; // Example additional page
import Main from './pages/main';
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className='appbar'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <Link to="/" className="toolbar-link">TG DATA</Link>
            </Typography>
            <Button color="inherit">
              <Link to="/user" className="toolbar-link">User</Link>
            </Button>
            <Button color="inherit">
              <Link to="/userData" className="toolbar-link">UserData</Link>
            </Button>
            <Button color="inherit">
              <Link to="/Configuration" className="toolbar-link">Configuration</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/userData" element={<UserData />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Configuration" element={<Configuration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
