import Heading from '@growth-ui/react/elements/Heading';
import Margin from '@growth-ui/react/elements/Margin';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const style = {
  background: 'rgba(0,0,0,0.3)',
};

const MarginExampleMargin = () => (
  <>
    <Heading as="h4">All</Heading>
    <Segment>
      <Margin style={style}>No margin</Margin>
      <Margin top={1} style={style}>
        Top
      </Margin>
      <Margin left={1} style={style}>
        Left
      </Margin>
      <Margin right={1} style={style}>
        Right
      </Margin>
      <Margin bottom={1} style={style}>
        Bottom
      </Margin>
      <Margin horizontal={1} style={style}>
        Horizontal
      </Margin>
      <Margin vertical={1} style={style}>
        Vertical
      </Margin>
      <Margin all={1} style={style}>
        All
      </Margin>
    </Segment>
  </>
);

export default MarginExampleMargin;
