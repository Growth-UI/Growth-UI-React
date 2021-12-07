import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Spacer from '@growth-ui/react/elements/Spacer';

const SpacerExampleAxis = () => (
  <Segment>
    <Grid.Row>
      <Paragraph>{faker.lorem.word()}</Paragraph>
      <Spacer axis="horizontal" size={30} />
      <Paragraph>{faker.lorem.word()}</Paragraph>
    </Grid.Row>
    <Spacer axis="vertical" size={50} />
    <Paragraph>{faker.lorem.sentences()}</Paragraph>
  </Segment>
);

export default SpacerExampleAxis;
