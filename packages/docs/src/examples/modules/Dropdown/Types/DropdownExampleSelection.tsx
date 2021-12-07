import Dropdown from '@growth-ui/react/modules/Dropdown';
import faker from 'faker';
import React from 'react';

const options = [
  {
    value: faker.name.firstName(),
    image: {
      circular: true,
      src: faker.image.avatar(),
    },
  },
  {
    value: faker.name.firstName(),
    image: {
      circular: true,
      src: faker.image.avatar(),
    },
  },
  {
    value: faker.name.firstName(),
    image: {
      circular: true,
      src: faker.image.avatar(),
    },
  },
  {
    value: faker.name.firstName(),
    image: {
      circular: true,
      src: faker.image.avatar(),
    },
  },
];

const DropdownExampleSelection = () => (
  <Dropdown
    defaultValue={options[0].value}
    direction="left"
    options={options}
  />
);
export default DropdownExampleSelection;
