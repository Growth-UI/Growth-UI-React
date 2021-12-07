import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const InputExampleSize = () => (
  <>
    <Input icon="search" placeholder="Search..." size="sm" />
    <Spacer size={30} />
    <Input icon="search" placeholder="Search..." size="base" />
    <Spacer size={30} />
    <Input icon="search" placeholder="Search..." size="lg" />
    <Spacer size={30} />
    <Input icon="search" placeholder="Search..." size="xl" />
    <Spacer size={30} />
    <Input icon="search" placeholder="Search..." size="2xl" />
    <Spacer size={30} />
    <Input icon="search" placeholder="Search..." size="3xl" />
    <Spacer size={30} />
    <Input icon="search" placeholder="Search..." size="4xl" />
  </>
);

export default InputExampleSize;
