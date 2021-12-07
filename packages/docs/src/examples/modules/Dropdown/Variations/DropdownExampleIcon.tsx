import Dropdown from '@growth-ui/react/modules/Dropdown';
import React from 'react';

const DropdownExampleIcon = () => (
  <Dropdown direction="left" text="Icon">
    <Dropdown.Menu>
      <Dropdown.Item icon="github" text="Github" />
      <Dropdown.Item icon="yarn" text="Yarn" />
      <Dropdown.Item icon="npm" text="Npm" />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownExampleIcon;
