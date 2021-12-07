import Button from '@growth-ui/react/elements/Button';
import React from 'react';

const ButtonExampleLoading = () => (
  <Button.Group rounded>
    <Button basic loading>
      Private
    </Button>
    <Button primary loading>
      Public
    </Button>
  </Button.Group>
);

export default ButtonExampleLoading;
