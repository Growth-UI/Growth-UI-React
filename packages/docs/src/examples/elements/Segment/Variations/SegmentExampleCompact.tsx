import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const SegmentExampleCompact = () => (
  <Segment compact>
    <Paragraph>{faker.lorem.word()}</Paragraph>
  </Segment>
);

export default SegmentExampleCompact;
