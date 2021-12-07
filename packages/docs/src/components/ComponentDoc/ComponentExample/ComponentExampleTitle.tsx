import ComponentDocContext from '../ComponentDocContext';
import Container from '@growth-ui/react/elements/Container';
import Heading from '@growth-ui/react/elements/Heading';
import React, { useContext } from 'react';

const ComponentExampleTitle = () => {
  const { description, id, title } = useContext(ComponentDocContext);

  return (
    <Container id={id}>
      {title && <Heading as="h3">{title}</Heading>}
      {description && <p>{description}</p>}
    </Container>
  );
};

export default ComponentExampleTitle;
