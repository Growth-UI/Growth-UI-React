import Dropdown from '@growth-ui/react/modules/Dropdown';
import React from 'react';

const DropdownExampleDropdown = () => (
  <Dropdown direction="left" text="File">
    <Dropdown.Menu>
      <Dropdown.Item text="New" />
      <Dropdown.Item description="ctrl + c" text="Copy" />
      <Dropdown.Item description="ctrl + v" text="Paste" />
      <Dropdown.Divider />
      <Dropdown.Item text="Quite" />
    </Dropdown.Menu>
  </Dropdown>
);
export default DropdownExampleDropdown;
