import Badge from '@growth-ui/react/elements/Badge';
import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';

const BadgeExampleColor = () => (
  <>
    <Badge content={3} color="gray-600">
      <Icon name="email" />
    </Badge>
    <Badge content={7} color="yellow-300">
      <Icon name="email" />
    </Badge>
  </>
);

export default BadgeExampleColor;
