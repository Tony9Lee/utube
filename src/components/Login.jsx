import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  const handleLogin = async () => {
    try {
      // Open a popup window for the login process
      await loginWithPopup();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleLogin}>
      Login
    </Button>
  );
};

export default LoginButton;
