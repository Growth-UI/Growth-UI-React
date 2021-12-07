import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleColumnCountPerRow = () => (
  <Segment>
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row columns={4}>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row columns={5}>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
        <Grid.Col>
          <Segment secondary>{faker.lorem.word()}</Segment>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default GridExampleColumnCountPerRow;
