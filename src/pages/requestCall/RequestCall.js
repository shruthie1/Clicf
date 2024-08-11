// App.js

import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import RequestCallForm from './RequestCallForm';

const RequestCall = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <RequestCallForm />
    </Container>
  );
};

export default RequestCall;
