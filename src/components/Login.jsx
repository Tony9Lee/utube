import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();

  const handleLogin = async () => {
    try {
      // Open a popup window for the login process
      await loginWithPopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Logout the user
    logout({ returnTo: window.location.origin });
  };

  return (
    <>
      {isAuthenticated ? (
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
            {/* things we can use 
              
              user.email - email <string>
              user.email_verified - email_verified <bool>
              ... - name (looks like the authenticated email?) <string>
              - nickname (without @domain.com) <string>
              - picture <string URL with image/png>
              - updated_at <timestamp of last activity (loggedin/logged out)>
              console.log({user})
            */}
          </Button>
      ) : (
        <Button variant="contained" color="error" onClick={handleLogin}>
          Login
        </Button>
      )}
    </>
  );
};

export default LoginButton;