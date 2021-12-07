import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleOnly = () => (
  <Segment>
    <Grid padded>
      <Grid.Row columns={1} only="computer">
        <Grid.Col>
          <Segment>Computer</Segment>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row columns={1} only={['laptop', 'computer', 'widescreen']}>
        <Grid.Col>
          <Segment>Laptop, Computer, and Widescreen</Segment>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Col>
          <Segment>All</Segment>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row columns={4}>
        <Grid.Col only="mobile">
          <Segment>Mobile</Segment>
        </Grid.Col>
        <Grid.Col only="tablet">
          <Segment>Tablet</Segment>
        </Grid.Col>
        <Grid.Col only="laptop">
          <Segment>Laptop</Segment>
        </Grid.Col>
        <Grid.Col only="computer">
          <Segment>Computer</Segment>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default GridExampleOnly;
