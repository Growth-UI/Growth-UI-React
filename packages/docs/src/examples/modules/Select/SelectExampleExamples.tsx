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

const SelectExampleExamples = () => (
  <>
    <Select fluid options={options} label="Fluid" />
    <Spacer size={30} />
    <Select circular options={options} label="Circular" />
  </>
);

export default SelectExampleExamples;
