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

const SelectExampleDefaultValue = () => (
  <>
    <Select defaultValue={[0, 2]} multiple options={options} label="Friends" />
    <Spacer size={30} />
    <Select defaultValue={0} options={options} label="Friends" />
  </>
);

export default SelectExampleDefaultValue;
