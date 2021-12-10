import faker from 'faker';
import React from 'react';
import Select from '@growth-ui/react/modules/Select';
import Spacer from '@growth-ui/react/elements/Spacer';
import times from 'lodash/times';

const options = times(5).map((n) => ({
  key: n,
  text: faker.name.findName(),
  value: n,
}));

const SelectExampleClearable = () => (
  <>
    <Select clearable multiple options={options} label="Friends" />
    <Spacer size={30} />
    <Select clearable options={options} label="Friends" />
  </>
);

export default SelectExampleClearable;
