import Accordion from '@growth-ui/react/modules/Accordion';
import React from 'react';

const panels = [
  {
    key: 'fun-fact-1',
    title: 'There’s only one letter that doesn’t appear in any U.S. state name',
    content:
      'Can you guess the answer to this random fact? You’ll find a Z (Arizona), a J (New Jersey), and even two X’s (New Mexico and Texas)',
  },
  {
    key: 'fun-fact-2',
    title: 'A cow-bison hybrid is called a “beefalo”',
    content: 'You can even buy its meat in at least 21 states.',
  },
  {
    key: 'fun-fact-3',
    title: 'Johnny Appleseed’s fruits weren’t for eating',
    content:
      'Yes, there was a real John Chapman who planted thousands of apple trees on U.S. soil. But the apples on those trees were much more bitter than the ones you’d find in the supermarket today. “Johnny Appleseed” didn’t expect his fruits to be eaten whole, but rather made into hard apple cider.',
  },
];

const AccordionExampleDefaultActiveIndex = () => (
  <Accordion
    defaultActiveIndex={[0, 2]}
    exclusive={false}
    fluid
    panels={panels}
  />
);

export default AccordionExampleDefaultActiveIndex;
