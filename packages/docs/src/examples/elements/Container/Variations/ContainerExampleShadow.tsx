import Container from '@growth-ui/react/elements/Container';
import faker from 'faker';
import React from 'react';

const ContainerExampleShadow = () => (
  <Container shadow>{faker.lorem.paragraphs()}</Container>
);

export default ContainerExampleShadow;
