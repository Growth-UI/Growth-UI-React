import Menu from '@growth-ui/react/collections/Menu';
import React, { useState } from 'react';

const MenuExampleSubMenu = () => {
  const [active, setActive] = useState('originals');

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <Menu vertical>
      <Menu.Item>
        <Menu.Heading>Animals</Menu.Heading>

        <Menu.Menu>
          <Menu.Item
            active={active === 'dog'}
            name="dog"
            onClick={handleItemClick}
          />
          <Menu.Item
            active={active === 'cat'}
            name="cat"
            onClick={handleItemClick}
          />
          <Menu.Item
            active={active === 'bird'}
            name="bird"
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Heading>Food</Menu.Heading>

        <Menu.Menu>
          <Menu.Item
            active={active === 'apple'}
            name="apple"
            onClick={handleItemClick}
          />
          <Menu.Item
            active={active === 'kiwi'}
            name="kiwi"
            onClick={handleItemClick}
          />
          <Menu.Item
            active={active === 'melon'}
            name="melon"
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};

export default MenuExampleSubMenu;
