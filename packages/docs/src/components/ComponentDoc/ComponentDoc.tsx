import ComponentExamples from './ComponentExamples';
import ComponentProps from '../ComponentProps';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import React, { FC } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

type Props = {
  subheading: string;
  heading: string;
  type: string;
};

const ComponentDoc: FC<Props> = (props) => {
  const { heading, subheading, type } = props;

  return (
    <Grid>
      <Grid.Row horizontalAlign="center">
        <Grid.Col width={15}>
          <Heading>
            {heading}
            <Heading.Content>{subheading}</Heading.Content>
          </Heading>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Spacer size={15} />
      </Grid.Row>

      <Grid.Row horizontalAlign="center">
        <Grid.Col width={15}>
          <ComponentProps component={heading?.toLowerCase()} />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row horizontalAlign="center">
        <Grid.Col width={15}>
          <ComponentExamples heading={heading} type={type} />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Spacer size={50} />
      </Grid.Row>
    </Grid>
  );
};

export default ComponentDoc;
