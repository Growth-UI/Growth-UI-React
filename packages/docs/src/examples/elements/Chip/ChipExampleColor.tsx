import Chip from '@growth-ui/react/elements/Chip';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const colors = [
  'red-500',
  'yellow-600',
  'yellow-300',
  'green-300',
  'blue-300',
  'indigo-300',
  'purple-300',
];

const ChipExampleColor = () => (
  <div>
    {colors.map((color) => (
      <div key={color}>
        <Chip color={color as any} text={color} />
        <Spacer size={10} />
      </div>
    ))}
  </div>
);

export default ChipExampleColor;
