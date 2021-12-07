import Menu from '@growth-ui/react/collections/Menu';
import React, { useState } from 'react';

const MenuExampleMenu = () => {
  const [active, setActive] = useState('naked');

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <Menu>
      <Menu.Item
        active={active === 'originals'}
        name="originals"
        onClick={handleItemClick}
      >
        Originals
      </Menu.Item>
      <Menu.Item
        active={active === 'content'}
        name="content"
        onClick={handleItemClick}
      >
        The Content Trap
      </Menu.Item>
      <Menu.Item
        active={active === 'naked'}
        name="naked"
        onClick={handleItemClick}
      >
        Naked Statistics
      </Menu.Item>
    </Menu>
  );
};

export default MenuExampleMenu;
