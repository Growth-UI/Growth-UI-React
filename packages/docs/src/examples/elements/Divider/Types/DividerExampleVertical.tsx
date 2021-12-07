import Divider from '@growth-ui/react/elements/Divider';
import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const DividerExampleVertical = () => (
  <Segment>
    <Grid relaxed>
      <Grid.Col width={8}>{faker.lorem.paragraphs()}</Grid.Col>
      <Grid.Col width={8}>{faker.lorem.paragraphs()}</Grid.Col>
    </Grid>
    <Divider vertical>OR</Divider>
  </Segment>
);

export default DividerExampleVertical;
