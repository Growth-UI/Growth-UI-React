import Heading from '@growth-ui/react/elements/Heading';
import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const HeadingExampleIcon = () => (
  <Segment>
    <Heading as="h1">
      <Icon name="code slash" />
      <Heading.Content>Hello World</Heading.Content>
    </Heading>
  </Segment>
);

export default HeadingExampleIcon;
