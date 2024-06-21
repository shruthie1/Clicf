// App.js

import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import ConfigurationForm from './ConfigurationForm';

const User = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <ConfigurationForm />
    </Container>
  );
};

export default User;
