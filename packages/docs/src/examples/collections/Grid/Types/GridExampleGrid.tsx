import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import times from 'lodash/times';

const GridExampleGrid = () => (
  <Segment>
    <Grid>
      {times(16, (i) => (
        <Grid.Col key={i}>
          <Image src={faker.image.animals(50, 50)} />
        </Grid.Col>
      ))}
    </Grid>
  </Segment>
);

export default GridExampleGrid;
