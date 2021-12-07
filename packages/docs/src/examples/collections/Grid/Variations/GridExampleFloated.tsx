import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleFloated = () => (
  <Segment>
    <Grid>
      <Grid.Row horizontalAlign="space-between">
        <Grid.Col width={6}>
          <Segment secondary>{faker.lorem.sentence()}</Segment>
        </Grid.Col>
        <Grid.Col width={6}>
          <Segment secondary>{faker.lorem.sentence()}</Segment>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default GridExampleFloated;
