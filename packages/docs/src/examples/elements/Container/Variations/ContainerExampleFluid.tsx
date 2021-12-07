import Container from '@growth-ui/react/elements/Container';
import faker from 'faker';
import React from 'react';

const ContainerExampleFluid = () => (
  <Container fluid padded shadow>
    {faker.lorem.word()}
  </Container>
);

export default ContainerExampleFluid;
