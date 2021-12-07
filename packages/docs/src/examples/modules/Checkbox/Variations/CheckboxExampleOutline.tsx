import Checkbox from '@growth-ui/react/modules/Checkbox';
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

const CheckboxExampleOutline = () => (
  <Segment>
    <Grid.Row>
      {colors.map((color) => (
        <Grid.Col padded key={color}>
          <Checkbox defaultChecked outline color={color} label={color} />
        </Grid.Col>
      ))}
    </Grid.Row>
  </Segment>
);

export default CheckboxExampleOutline;
