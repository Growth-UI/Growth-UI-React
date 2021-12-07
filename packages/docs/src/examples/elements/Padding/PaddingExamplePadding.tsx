import Heading from '@growth-ui/react/elements/Heading';
import Padding from '@growth-ui/react/elements/Padding';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const PaddingExamplePadding = () => (
  <>
    <Heading as="h4">All</Heading>
    <Segment>
      <Padding>No Padding</Padding>
      <Padding top={1} style={{ background: 'red' }}>
        Top
      </Padding>
      <Padding left={1} style={{ background: 'orange' }}>
        Left
      </Padding>
      <Padding right={1} style={{ background: 'yellow' }}>
        Right
      </Padding>
      <Padding bottom={1} style={{ background: 'green' }}>
        Bottom
      </Padding>
      <Padding horizontal={1} style={{ background: 'blue' }}>
        Horizontal
      </Padding>
      <Padding vertical={1} style={{ background: 'navy' }}>
        Vertical
      </Padding>
      <Padding all={1} style={{ background: 'purple' }}>
        All
      </Padding>
    </Segment>
  </>
);

export default PaddingExamplePadding;
