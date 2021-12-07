import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const HeadingExampleTextAlignment = () => (
  <Segment>
    <Heading as="h2" textAlign="left">
      Left
      <Heading.Content>Align text to left.</Heading.Content>
    </Heading>
    <Heading as="h2" textAlign="center">
      Center
      <Heading.Content>Align text to center.</Heading.Content>
    </Heading>
    <Heading as="h2" textAlign="right">
      Right
      <Heading.Content>Align text to right.</Heading.Content>
    </Heading>
  </Segment>
);

export default HeadingExampleTextAlignment;
