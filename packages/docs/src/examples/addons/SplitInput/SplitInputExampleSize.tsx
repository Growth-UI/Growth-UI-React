import React from 'react';
import SplitInput from '@growth-ui/react/addons/SplitInput';

const sizes = [
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'big',
  'huge',
  'massive',
];

const SplitInputExampleSize = () => {
  return (
    <>
      {sizes.map((size: any) => (
        <SplitInput num={6} size={size} key={size} />
      ))}
    </>
  );
};

export default SplitInputExampleSize;
