import faker from 'faker';
import React from 'react';
import Select from '@growth-ui/react/modules/Select';
import times from 'lodash/times';

const options = times(25).map((n) => ({
  key: n,
  text: faker.name.findName(),
  value: n,
}));

const SelectExampleScrolling = () => (
  <Select scrolling options={options} label="Friends" />
);

export default SelectExampleScrolling;
