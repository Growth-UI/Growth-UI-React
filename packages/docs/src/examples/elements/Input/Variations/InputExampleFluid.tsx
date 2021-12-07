import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleFluid = () => (
  <>
    <Input fluid basic label="Fluid" />
    <Spacer size={30} />
    <Input fluid placeholder="Fluid" />
    <Spacer size={30} />
    <Input fluid filled label="Fluid" />
  </>
);

export default InputExampleFluid;
