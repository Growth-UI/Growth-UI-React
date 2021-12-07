import Menu from '@growth-ui/react/collections/Menu';
import React, { useState } from 'react';

const MenuExampleTabularOnLeft = () => {
  const [active, setActive] = useState('originals');

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <Menu tabular vertical>
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

export default MenuExampleTabularOnLeft;
