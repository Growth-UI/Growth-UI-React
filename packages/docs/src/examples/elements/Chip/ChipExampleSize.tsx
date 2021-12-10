import Chip from '@growth-ui/react/elements/Chip';
import faker from 'faker';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

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

const ChipExampleSize = () => (
  <div>
    {sizes.map((size) => (
      <div key={size}>
        <Chip
          image={{ src: faker.image.animals() }}
          size={size as any}
          text={size}
        />
        <Spacer size={10} />
      </div>
    ))}
  </div>
);

export default ChipExampleSize;
