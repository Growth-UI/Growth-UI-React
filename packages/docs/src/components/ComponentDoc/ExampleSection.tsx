import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import React, { FC } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

type Props = {
  title: string;
};

const ExampleSection: FC<Props> = (props) => {
  const { children, title } = props;

  return (
    <Grid>
      <Grid.Col width={16}>
        <Spacer size={30} />
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
        {children}
      </Grid.Col>
    </Grid>
  );
};

export default ExampleSection;
