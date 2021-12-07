import Accordion from '@growth-ui/react/modules/Accordion';
import React from 'react';

const panels = [
  {
    key: 'book-1',
    title: {
      content: 'The Mosquito: A Human History of Our Deadliest Predator',
      icon: {
        name: 'triangle down',
        flipped: false,
      },
    },
    content: {
      content:
        'A ground-breaking work of narrative non-fiction that offers a dramatic new perspective on human history. What was George Washington’s secret weapon during the American Revolution, and how did it lead to Britain colonising Australia? What protected Popes for centuries?',
    },
  },
  {
    key: 'book-2',
    title: {
      content: 'You can fix your brain',
      icon: 'triangle down',
    },
    content:
      "For anyone worried about any type of brain ailment, ranging from the chronic conditions to simple brain fog and fatigue, this essential guide covers the full spectrum of prevention to treatment.We've all experienced brain fog—misplaced keys, forgotten facts, a general feeling that you're just feeling off today",
  },
];

const AccordionExampleIconShorthand = () => <Accordion panels={panels} />;

export default AccordionExampleIconShorthand;
