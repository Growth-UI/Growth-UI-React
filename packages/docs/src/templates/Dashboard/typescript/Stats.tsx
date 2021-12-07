import Button from '@growth-ui/react/elements/Button';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Spacer from '@growth-ui/react/elements/Spacer';

const Stats = () => (
  <Segment>
    <Grid padded>
      <Grid.Row verticalAlign="top">
        <Grid.Col width={5}>
          <Heading as="h3">Revenue</Heading>
          <Spacer size={15} />
          <h3>$154,589</h3>
          <Paragraph>12% up, month on month</Paragraph>
        </Grid.Col>

        <Grid.Col width={5}>
          <Heading as="h3">Operating Income</Heading>
          <Spacer size={15} />
          <h3>$54,589</h3>
          <Paragraph>15% up, month on month</Paragraph>
        </Grid.Col>

        <Grid.Col>
          <Heading as="h3">Orders</Heading>
          <Spacer size={15} />
          <h3>478</h3>
          <Paragraph>8% up, month on month</Paragraph>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col>
          <Button basic color="indigo-300" size="small">
            View detail
          </Button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Stats;
