// App.js

import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import UserForm from './UserForm';

const User = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <UserForm />
    </Container>
  );
};

export default User;
