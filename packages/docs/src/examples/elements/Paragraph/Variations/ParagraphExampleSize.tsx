import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const ParagraphExampleSize = () => (
  <Segment>
    <Paragraph fontSize="xs">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="sm">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="base">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="lg">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="xl">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="2xl">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="3xl">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="4xl">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="5xl">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="6xl">{faker.lorem.word()}</Paragraph>
    <Paragraph fontSize="7xl">{faker.lorem.word()}</Paragraph>
  </Segment>
);

export default ParagraphExampleSize;
