import faker from 'faker';
import Heading from '@growth-ui/react/elements/Heading';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Spacer from '@growth-ui/react/elements/Spacer';

const ParagraphExampleLineHeight = () => (
  <Segment>
    <Heading as="h3">Default</Heading>
    <Paragraph>{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading None</Heading>
    <Paragraph lineHeight="leading-none">{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading Snug</Heading>
    <Paragraph lineHeight="leading-snug">{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading Relaxed</Heading>
    <Paragraph lineHeight="leading-relaxed">
      {faker.lorem.paragraph()}
    </Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading 3</Heading>
    <Paragraph lineHeight="leading-3">{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading 4</Heading>
    <Paragraph lineHeight="leading-4">{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading 7</Heading>
    <Paragraph lineHeight="leading-7">{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />

    <Heading as="h3">Leading 10</Heading>
    <Paragraph lineHeight="leading-10">{faker.lorem.paragraph()}</Paragraph>
    <Spacer size={30} />
  </Segment>
);

export default ParagraphExampleLineHeight;
