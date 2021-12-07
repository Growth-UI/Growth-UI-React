import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleResponsiveReverse = () => (
  <Segment>
    <Grid padded>
      <Grid.Row columns={3} reversed="laptop">
        <Grid.Col>1</Grid.Col>
        <Grid.Col>2</Grid.Col>
        <Grid.Col>3</Grid.Col>
      </Grid.Row>

      <Grid.Row columns={3} reversed="computer">
        <Grid.Col>1</Grid.Col>
        <Grid.Col>2</Grid.Col>
        <Grid.Col>3</Grid.Col>
      </Grid.Row>

      <Grid.Row columns={3} reversed={['laptop', 'mobile']}>
        <Grid.Col>1</Grid.Col>
        <Grid.Col>2</Grid.Col>
        <Grid.Col>3</Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default GridExampleResponsiveReverse;
