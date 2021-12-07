import Accordion from '@growth-ui/react/modules/Accordion';
import React from 'react';

const panels = [
  {
    key: 'my-favorite-1',
    title: 'My favorite movie',
    content: 'Catch me if you can',
  },
  {
    key: 'my-favorite-2',
    title: 'My favorite food',
    content: 'Korean BBQ',
  },
  {
    key: 'my-favorite-3',
    title: 'my favorite singer',
    content: 'Brown Eyed Soul',
  },
];

const AccordionExampleIconPosition = () => (
  <Accordion iconPosition="right" styled panels={panels} />
);

export default AccordionExampleIconPosition;
