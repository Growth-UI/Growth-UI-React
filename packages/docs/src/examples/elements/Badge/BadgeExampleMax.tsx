import Badge from '@growth-ui/react/elements/Badge';
import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';

const BadgeExampleMax = () => (
  <>
    <Badge inline relaxed content={99}>
      <Icon name="email" />
    </Badge>

    <Badge inline relaxed content={100}>
      <Icon name="email" />
    </Badge>

    <Badge inline relaxed content={1010} max={999}>
      <Icon name="email" />
    </Badge>
  </>
);

export default BadgeExampleMax;
