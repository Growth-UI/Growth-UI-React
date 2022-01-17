import Button from '@growth-ui/react/elements/Button';
import React, { useState } from 'react';
import Snackbar from '@growth-ui/react/views/Snackbar';

const positions = [
  'bottom center',
  'bottom left',
  'bottom right',
  'left center',
  'right center',
  'top center',
  'top left',
  'top right',
];

const SnackbarExampleAutoHideDuration = () => {
  const [currentPosition, setCurrentPosition] = useState('');

  const handleClose = () => {
    setCurrentPosition('');
  };

  return (
    <>
      {positions.map((position) => (
        <Button
          basic
          key={position}
          onClick={() => setCurrentPosition(position)}
        >
          {position}
        </Button>
      ))}
      {currentPosition && (
        <Snackbar
          autoHideDuration={3000}
          position={currentPosition as any}
          header={`Position - ${currentPosition}`}
          message="Will be closed in 3000ms"
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default SnackbarExampleAutoHideDuration;
