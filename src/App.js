import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './pages/user/User';
import UserData from './pages/user-data/UserData'; // Example additional page
import Client from './pages/clients/Client'; // Example additional page
import Configuration from './pages/configuration/Configuration'; // Example additional page
import Main from './pages/main';
import CustomNavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import RequestCall from './pages/requestCall/RequestCall';


function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/userData" element={<UserData />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Configuration" element={<Configuration />} />
          <Route path="/requestCall" element={<RequestCall />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
