import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const GridExampleResponsiveWidth = () => (
  <Segment>
    <Grid padded>
      <Grid.Col width={4} tablet={8} mobile={16} minimobile={16}>
        {faker.lorem.paragraphs()}
      </Grid.Col>
      <Grid.Col width={4} tablet={8} mobile={16} minimobile={16}>
        {faker.lorem.paragraphs()}
      </Grid.Col>
      <Grid.Col width={4} tablet={8} mobile={16} minimobile={16}>
        {faker.lorem.paragraphs()}
      </Grid.Col>
      <Grid.Col width={4} tablet={8} mobile={16} minimobile={16}>
        {faker.lorem.paragraphs()}
      </Grid.Col>
    </Grid>
  </Segment>
);

export default GridExampleResponsiveWidth;
