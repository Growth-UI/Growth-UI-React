import Chip from '@growth-ui/react/elements/Chip';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const ChipExampleIcon = () => (
  <div>
    <Chip
      text="Tag"
      icon={{
        name: 'close',
      }}
      iconPosition="right"
    />
    <Spacer size={15} />

    <Chip
      text="Mail"
      icon={{
        name: 'email',
      }}
    />
    <Spacer size={15} />
  </div>
);

export default ChipExampleIcon;
