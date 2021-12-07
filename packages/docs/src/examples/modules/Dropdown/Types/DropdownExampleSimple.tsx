import Dropdown from '@growth-ui/react/modules/Dropdown';
import faker from 'faker';
import Menu from '@growth-ui/react/collections/Menu';
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

const DropdownExampleSimple = () => (
  <Menu compact>
    <Menu.Item>
      <Dropdown simple text="Dropdown" direction="left" options={options} />
    </Menu.Item>
  </Menu>
);

export default DropdownExampleSimple;
