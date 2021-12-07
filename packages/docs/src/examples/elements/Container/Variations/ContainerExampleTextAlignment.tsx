import Container from '@growth-ui/react/elements/Container';
import Segment from '@growth-ui/react/elements/Segment';
import React from 'react';

const ContainerExampleTextAlignment = () => (
  <Segment>
    <Container fluid textAlign="left">
      Left
    </Container>
    <Container fluid textAlign="right">
      Right
    </Container>
    <Container fluid textAlign="center">
      center
    </Container>
    <Container fluid textAlign="justified">
      Justified
    </Container>
  </Segment>
);

export default ContainerExampleTextAlignment;
