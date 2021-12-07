import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleBasic = () => (
  <>
    <Input basic placeholder="Basic" />
    <Spacer size={30} />
    <Input basic label="Name" />
    <Spacer size={30} />
    <Input basic label="Name" error feedback="Error" />
  </>
);

export default InputExampleBasic;
