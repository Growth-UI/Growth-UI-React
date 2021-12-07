import Dropdown from '@growth-ui/react/modules/Dropdown';
import faker from 'faker';
import React from 'react';

const trigger = () => <span>Hi, {faker.name.firstName()}</span>;

const options = [
  {
    text: 'Profile',
  },
  {
    text: 'Settings',
  },
  {
    text: 'Points',
    disabled: true,
  },
  {
    text: 'Log out',
  },
];

const DropdownExampleTrigger = () => (
  <Dropdown trigger={trigger()} direction="left" options={options} />
);

export default DropdownExampleTrigger;
