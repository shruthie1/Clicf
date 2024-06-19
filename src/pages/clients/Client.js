// App.js

import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import ClientForm from './ClientForm';

const User = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <ClientForm />
    </Container>
  );
};

export default User;
