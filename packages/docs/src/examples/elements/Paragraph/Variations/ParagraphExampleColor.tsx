import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const ParagraphExampleColor = () => (
  <Segment>
    <Paragraph color="red-600">{faker.lorem.word()}</Paragraph>
    <Paragraph color="blue-600">{faker.lorem.word()}</Paragraph>
    <Paragraph color="yellow-600">{faker.lorem.word()}</Paragraph>
    <Paragraph color="pink-600">{faker.lorem.word()}</Paragraph>
    <Paragraph color="indigo-600">{faker.lorem.word()}</Paragraph>
    <Paragraph color="green-600">{faker.lorem.word()}</Paragraph>
    <Paragraph color="purple-600">{faker.lorem.word()}</Paragraph>
  </Segment>
);

export default ParagraphExampleColor;
