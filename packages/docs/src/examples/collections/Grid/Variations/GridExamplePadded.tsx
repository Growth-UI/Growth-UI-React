import Divider from '@growth-ui/react/elements/Divider';
import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExamplePadded = () => (
  <Segment>
    <Grid padded columns={2}>
      <Grid.Col>{faker.lorem.paragraphs()}</Grid.Col>
      <Grid.Col>{faker.lorem.paragraphs()}</Grid.Col>
    </Grid>

    <Divider horizontal>VS</Divider>

    <Grid columns={2}>
      <Grid.Col>{faker.lorem.paragraphs()}</Grid.Col>
      <Grid.Col>{faker.lorem.paragraphs()}</Grid.Col>
    </Grid>
  </Segment>
);

export default GridExamplePadded;
