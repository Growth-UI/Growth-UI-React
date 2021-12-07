import Container from '@growth-ui/react/elements/Container';
import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';

const ContainerExampleCompact = () => (
  <Container>
    <Paragraph css="width: 80%;">{faker.lorem.paragraphs()}</Paragraph>
  </Container>
);

export default ContainerExampleCompact;
