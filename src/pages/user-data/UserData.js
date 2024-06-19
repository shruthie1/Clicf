// App.js

import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import UserDataForm from './UserDataForm';

const User = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <UserDataForm />
    </Container>
  );
};

export default User;
