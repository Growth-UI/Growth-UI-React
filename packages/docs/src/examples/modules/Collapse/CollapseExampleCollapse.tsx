import Button from '@growth-ui/react/elements/Button';
import Collapse from '@growth-ui/react/modules/Collapse';
import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const CollapseExampleCollapse = () => {
  const [expanded, setExpaned] = useState(false);

  const expand = () => setExpaned(!expanded);

  return (
    <>
      <Button basic onClick={expand}>
        👉 Click me 👈
      </Button>
      <Spacer size={30} />
      <Collapse expanded={expanded}>
        <Image lazy={false} src={faker.image.animals()} />
      </Collapse>
    </>
  );
};

export default CollapseExampleCollapse;
