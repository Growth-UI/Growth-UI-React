import List from '@growth-ui/react/elements/List';
import React, { useState } from 'react';

const beverages = ['cola', 'sprite', 'coffee', 'milk'];

const ListExapleActive = () => {
  const [active, setActive] = useState(beverages[1]);

  const handleClick = (beverage: string) => {
    setActive(beverage);
  };

  return (
    <List padded selection>
      {beverages.map((beverage) => (
        <List.Item
          active={active === beverage}
          key={beverage}
          onClick={() => handleClick(beverage)}
        >
          {beverage.toUpperCase()}
        </List.Item>
      ))}
    </List>
  );
};

export default ListExapleActive;
