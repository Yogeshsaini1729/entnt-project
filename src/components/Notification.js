import React from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';

const Notification = ({ message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={true}
      autoHideDuration={6000}
    >
      <SnackbarContent
        style={{ backgroundColor: '#4caf50' }}
        message={message}
      />
    </Snackbar>
  );
};

export default Notification;
