import Chip from '@growth-ui/react/elements/Chip';
import faker from 'faker';
import React from 'react';

const ChipExampleImage = () => (
  <div>
    <Chip
      image={{
        src: faker.image.animals(),
      }}
      text={faker.hacker.noun()}
    />
  </div>
);

export default ChipExampleImage;
