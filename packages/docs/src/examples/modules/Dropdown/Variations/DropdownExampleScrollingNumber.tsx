import Dropdown from '@growth-ui/react/modules/Dropdown';
import faker from 'faker';
import React from 'react';
import times from 'lodash/times';

const options = times(15, () => ({
  value: faker.name.jobType(),
}));

const DropdownExampleScrollingNumber = () => (
  <Dropdown
    defaultValue={options[0].value}
    direction="left"
    options={options}
    scrolling={150}
  />
);

export default DropdownExampleScrollingNumber;
