import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleIcon = () => (
  <>
    <Input icon="email" label="Email" />
    <Spacer size={30} />
    <Input icon="email" iconPosition="right" label="Email" />
    <Spacer size={30} />
    <Input filled icon="email" />
    <Spacer size={30} />
    <Input basic icon="language" placeholder="English, Korean, ..." />
  </>
);

export default InputExampleIcon;
