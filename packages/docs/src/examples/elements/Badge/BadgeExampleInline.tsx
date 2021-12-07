import Badge from '@growth-ui/react/elements/Badge';
import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';

const BadgeExampleInline = () => (
  <>
    <Badge inline content={3} color="purple-600">
      <Icon name="email" />
    </Badge>
    <Badge inline content={7} color="green-300">
      <Icon name="email" />
    </Badge>
  </>
);

export default BadgeExampleInline;
