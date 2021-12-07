import faker from 'faker';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Spacer from '@growth-ui/react/elements/Spacer';

const SpacerExampleSpacer = () => (
  <Segment>
    <Paragraph>{faker.lorem.sentences()}</Paragraph>
    <Spacer size={30} />
    <Paragraph>{faker.lorem.sentences()}</Paragraph>
  </Segment>
);

export default SpacerExampleSpacer;
