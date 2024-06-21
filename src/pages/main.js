import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './main.css'; // Import the CSS file

function Main() {
  const pages = [
    { path: '/user', label: 'User Page' },
    { path: '/userData', label: 'UserData Page' },
    { path: '/client', label: 'Client Page' },
    { path: '/configuration', label: 'Configuration Page' },
    // Add more pages as needed
  ];

  return (
    <Box display="block">
      {pages.map((page, index) => (
        <Link key={index} to={page.path} className="tab-link" style={{ '--length': pages.length, '--random-color': getRandomColor() , borderRadius: '20px'}}>
          {page.label}
        </Link>
      ))}
    </Box>
  );
}

function getRandomColor() {
    let color;
    do {
        color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    } while (color === '#ffffff'); // Avoid white color

    return color;
}

export default Main;
