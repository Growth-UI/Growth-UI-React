import Dropdown from '@growth-ui/react/modules/Dropdown';
import faker from 'faker';
import React from 'react';
import times from 'lodash/times';

const options = times(3, () => ({
  value: faker.music.genre(),
}));

const DropdownExampleSpace = () => (
  <Dropdown
    space
    defaultValue={options[0].value}
    direction="left"
    options={options}
  />
);

export default DropdownExampleSpace;
