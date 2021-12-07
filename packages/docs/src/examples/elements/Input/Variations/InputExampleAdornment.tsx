import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleAdornment = () => (
  <>
    <Input adornment="$" />
    <Spacer size={30} />
    <Input adornment="$" label="Amount" placeholder="9.99" />
  </>
);

export default InputExampleAdornment;
