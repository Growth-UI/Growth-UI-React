import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import SplitInput, {
  SplitInputProps,
} from '@growth-ui/react/addons/SplitInput';

const SplitInputExampleOnEnd = () => {
  const handleEnd = (
    _: React.ChangeEvent<HTMLInputElement>,
    data: SplitInputProps,
  ) => {
    const { setValue } = data;

    setValue(Array(6).fill(''));
  };

  return (
    <>
      <Heading>Clear input values on end.</Heading>
      <SplitInput num={6} onEnd={handleEnd} />
    </>
  );
};

export default SplitInputExampleOnEnd;
