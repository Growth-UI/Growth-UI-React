import Chip from '@growth-ui/react/elements/Chip';
import faker from 'faker';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const ChipExampleOutlined = () => (
  <div>
    <Chip outlined text={faker.hacker.noun()} />
    <Spacer size={15} />

    <Chip outlined color="primary" text={faker.hacker.noun()} />
    <Spacer size={15} />

    <Chip
      outlined
      image={{ src: faker.image.animals() }}
      text={faker.hacker.noun()}
    />
  </div>
);

export default ChipExampleOutlined;
