import Container from '@growth-ui/react/elements/Container';
import faker from 'faker';
import React from 'react';

const ContainerExamplePadded = () => (
  <Container padded shadow>
    {faker.lorem.sentences()}
  </Container>
);

export default ContainerExamplePadded;
