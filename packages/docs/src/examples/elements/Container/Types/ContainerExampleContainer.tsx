import Container from '@growth-ui/react/elements/Container';
import faker from 'faker';
import React from 'react';

const ContainerExampleContainer = () => (
  <Container>{faker.lorem.paragraphs()}</Container>
);

export default ContainerExampleContainer;
