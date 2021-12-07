import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleLabeled = () => (
  <>
    <Input label="Email" />
    <Spacer size={30} />
    <Input label="Email" placeholder="example@gmail.com" />
  </>
);

export default InputExampleLabeled;
