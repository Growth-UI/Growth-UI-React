import Divider from '@growth-ui/react/elements/Divider';
import faker from 'faker';
import Image from '@growth-ui/react/elements/Image';
import MinHeight from '@growth-ui/react/elements/MinHeight';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const MinHeightExampleMinHeight = () => (
  <Segment.Group horizontal>
    <Segment>
      <MinHeight min={330}>
        <Image src={faker.image.animals(250, 250)} />
      </MinHeight>
      <Divider />
      <Paragraph>{faker.lorem.sentences()}</Paragraph>
    </Segment>
    <Segment>
      <MinHeight min={330}>
        <Image src={faker.image.animals(250, 300)} />
      </MinHeight>
      <Divider />
      <Paragraph>{faker.lorem.sentences()}</Paragraph>
    </Segment>
  </Segment.Group>
);

export default MinHeightExampleMinHeight;
