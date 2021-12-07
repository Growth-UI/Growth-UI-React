import Dropdown from '@growth-ui/react/modules/Dropdown';
import React from 'react';

const options = [
  {
    value: 'New File',
  },
  {
    value: 'New Window',
  },
  {
    value: 'Open',
  },
  {
    value: 'Open Workspace',
  },
];

const DropdownExampleUpward = () => (
  <Dropdown upward direction="left" options={options} text="File" />
);

export default DropdownExampleUpward;
