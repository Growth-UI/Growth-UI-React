import Divider from '@growth-ui/react/elements/Divider';
import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const DividerExampleHorizontal = () => (
  <Segment>
    <Grid>
      <Grid.Row>
        <Grid.Col padded>{faker.lorem.paragraphs()}</Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Divider horizontal>OR</Divider>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col padded>{faker.lorem.paragraphs()}</Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default DividerExampleHorizontal;
