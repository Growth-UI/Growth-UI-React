import Chip from '@growth-ui/react/elements/Chip';
import faker from 'faker';
import React from 'react';

const ChipExampleCircular = () => (
  <div>
    <Chip circular text={faker.random.word()} />
  </div>
);

export default ChipExampleCircular;
