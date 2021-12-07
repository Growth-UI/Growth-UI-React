import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const SegmentExampleEmphasis = () => (
  <>
    <Segment>
      <Paragraph>{faker.lorem.sentences()}</Paragraph>
    </Segment>
    <Segment secondary>
      <Paragraph>{faker.lorem.sentences()}</Paragraph>
    </Segment>
  </>
);

export default SegmentExampleEmphasis;
