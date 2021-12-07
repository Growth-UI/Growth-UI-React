import faker from 'faker';
import Menu from '@growth-ui/react/collections/Menu';
import React, { useState } from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const MenuExamplePointing = () => {
  const [active, setActive] = useState('theContentTrap');

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <>
      <Menu pointing>
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
      <Segment>{faker.lorem.paragraphs()}</Segment>
    </>
  );
};

export default MenuExamplePointing;
