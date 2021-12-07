import Menu from '@growth-ui/react/collections/Menu';
import React, { useState } from 'react';

const MenuExampleName = () => {
  const [active, setActive] = useState('theContentTrap');

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <Menu>
      <Menu.Item
        active={active === 'originals'}
        name="originals"
        onClick={handleItemClick}
      />
      <Menu.Item
        active={active === 'theContentTrap'}
        name="theContentTrap"
        onClick={handleItemClick}
      />
      <Menu.Item
        active={active === 'nakedStatistics'}
        name="nakedStatistics"
        onClick={handleItemClick}
      />
    </Menu>
  );
};

export default MenuExampleName;
