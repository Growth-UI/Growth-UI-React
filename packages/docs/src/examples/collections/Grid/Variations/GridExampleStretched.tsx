import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleStretched = () => (
  <Segment>
    <Grid>
      <Grid.Row stretched>
        <Grid.Col>
          <Segment>1</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default GridExampleStretched;
