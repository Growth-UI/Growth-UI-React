import Badge from '@growth-ui/react/elements/Badge';
import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';

const BadgeExampleRelaxed = () => (
  <>
    <Badge inline relaxed content={99}>
      <Icon name="email" />
    </Badge>

    <Badge inline relaxed content={31}>
      <Icon name="email" />
    </Badge>

    <Badge dot inline relaxed>
      <Icon name="email" />
    </Badge>
  </>
);

export default BadgeExampleRelaxed;
