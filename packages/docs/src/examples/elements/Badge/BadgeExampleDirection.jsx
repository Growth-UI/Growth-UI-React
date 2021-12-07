import Badge from '@growth-ui/react/elements/Badge';
import Dropdown from '@growth-ui/react/modules/Dropdown';
import Icon from '@growth-ui/react/elements/Icon';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const options = [
  {
    value: 'top right',
  },
  {
    value: 'top left',
  },
  {
    value: 'bottom left',
  },
  {
    value: 'bottom right',
  },
];

const BadgeExampleDirection = () => {
  const [direction, setDirection] = useState('top right');

  const handleItemClick = (_, { value }) => {
    setDirection(value);
  };

  return (
    <>
      <Dropdown
        upward
        defaultValue={options[0].value}
        options={options}
        onAddItem={handleItemClick}
      />
      <Spacer size={30} />
      <Badge content={3} direction={direction}>
        <Icon name="email" />
      </Badge>
    </>
  );
};

export default BadgeExampleDirection;
