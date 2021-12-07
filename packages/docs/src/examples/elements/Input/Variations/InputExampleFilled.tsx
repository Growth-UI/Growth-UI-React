import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleFilled = () => (
  <>
    <Input filled placeholder="Placeholder" />
    <Spacer size={30} />
    <Input filled label="Filled" />
  </>
);

export default InputExampleFilled;
