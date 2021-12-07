import capitalize from 'lodash/capitalize';
import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import { COLORS } from '@growth-ui/react/types';

const colors = [
  'red-600',
  'blue-600',
  'gray-500',
  'indigo-600',
  'pink-500',
  'purple-600',
  'green-500',
  'yellow-300',
] as COLORS[];

const GridExampleColoredRow = () => (
  <Segment>
    <Grid relaxed>
      {colors.map((color) => (
        <Grid.Row color={color} key={color}>
          <Grid.Col>{capitalize(color)}</Grid.Col>
        </Grid.Row>
      ))}
    </Grid>
  </Segment>
);

export default GridExampleColoredRow;
