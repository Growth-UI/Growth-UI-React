import faker from 'faker';
import React from 'react';
import Select from '@growth-ui/react/modules/Select';
import times from 'lodash/times';

const options = times(5).map((n) => ({
  key: n,
  text: faker.name.findName(),
  value: n,
}));

const SelectExampleBasic = () => (
  <Select basic options={options} label="Friends" />
);

export default SelectExampleBasic;
