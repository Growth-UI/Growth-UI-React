import React from 'react';
import Snackbar from '@growth-ui/react/views/Snackbar';

const SnackbarExampleEmphasis = () => (
  <>
    <Snackbar error>This is an error message!</Snackbar>
    <Snackbar
      warning
      message="This is an warning message!"
      icon={{ name: 'warning' }}
    />
    <Snackbar info>This is an info message!</Snackbar>
    <Snackbar success>This is an success message!</Snackbar>
  </>
);

export default SnackbarExampleEmphasis;
