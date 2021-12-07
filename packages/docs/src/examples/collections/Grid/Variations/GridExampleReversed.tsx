import Divider from '@growth-ui/react/elements/Divider';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleReversed = () => (
  <Segment>
    <Grid relaxed>
      <Grid.Row columns={3} reversed>
        <Grid.Col>1</Grid.Col>
        <Grid.Col>2</Grid.Col>
        <Grid.Col>3</Grid.Col>
      </Grid.Row>
    </Grid>

    <Divider horizontal>OR</Divider>

    <Grid padded columns={1}>
      <Grid.Col reversed>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Col>
    </Grid>
  </Segment>
);

export default GridExampleReversed;
