import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleColumnWidth = () => (
  <Segment>
    <Grid>
      <Grid.Col width={3}>
        <Segment secondary>{faker.lorem.word()}</Segment>
      </Grid.Col>
      <Grid.Col width={6}>
        <Segment secondary>{faker.lorem.word()}</Segment>
      </Grid.Col>
      <Grid.Col width={5}>
        <Segment secondary>{faker.lorem.word()}</Segment>
      </Grid.Col>
    </Grid>
  </Segment>
);

export default GridExampleColumnWidth;
