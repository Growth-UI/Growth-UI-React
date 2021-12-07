import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const SegmentExampleHorizontalSegments = () => (
  <Segment.Group horizontal>
    <Segment>
      <Paragraph>{faker.lorem.word()}</Paragraph>
    </Segment>
    <Segment>
      <Paragraph>{faker.lorem.word()}</Paragraph>
    </Segment>
    <Segment>
      <Paragraph>{faker.lorem.word()}</Paragraph>
    </Segment>
  </Segment.Group>
);

export default SegmentExampleHorizontalSegments;
