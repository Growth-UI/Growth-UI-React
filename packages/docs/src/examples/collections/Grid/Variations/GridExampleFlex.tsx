import faker from 'faker';
import Grid from '@growth-ui/react/collections/Grid';
import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Spacer from '@growth-ui/react/elements/Spacer';

const GridExampleFlex = () => (
  <>
    <Heading as="h4">Initial</Heading>
    <Segment>
      <Heading as="h5">
        Items don&apos;t grow when there&apos;s extra space
      </Heading>
      <Grid>
        <Grid.Row wrap="nowrap">
          <Grid.Col color="blue-200">lorem</Grid.Col>
          <Grid.Col color="yellow-200">cheramics hb</Grid.Col>
        </Grid.Row>
      </Grid>
      <Spacer size={30} />
      <Heading as="h5">Items shrink if possible when needed</Heading>
      <Grid>
        <Grid.Row wrap="nowrap">
          <Grid.Col color="blue-200" flex="initial">
            lorem
          </Grid.Col>
          <Grid.Col color="yellow-200" flex="initial">
            cheramics hb
          </Grid.Col>
          <Grid.Col color="red-200" flex="initial">
            {faker.lorem.paragraph()}
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Segment>
    <Spacer size={30} />
    <Heading as="h4">1</Heading>
    <Segment>
      <Grid>
        <Grid.Row wrap="nowrap">
          <Grid.Col color="blue-200">lorem</Grid.Col>
          <Grid.Col color="yellow-200">cheramics hb</Grid.Col>
          <Grid.Col color="red-200">{faker.lorem.sentence()}</Grid.Col>
        </Grid.Row>
      </Grid>
      <Spacer size={30} />
      <Heading as="h5">Grow and shrink as needed</Heading>
      <Grid>
        <Grid.Row wrap="nowrap">
          <Grid.Col color="blue-200" flex="1">
            lorem
          </Grid.Col>
          <Grid.Col color="yellow-200" flex="1">
            cheramics hb
          </Grid.Col>
          <Grid.Col color="red-200" flex="1">
            {faker.lorem.sentence()}
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Segment>
    <Spacer size={30} />
    <Heading as="h4">Auto</Heading>
    <Segment>
      <Grid>
        <Grid.Row wrap="nowrap">
          <Grid.Col color="blue-200">lorem</Grid.Col>
          <Grid.Col color="yellow-200">cheramics hb</Grid.Col>
          <Grid.Col color="red-200">{faker.lorem.sentence()}</Grid.Col>
        </Grid.Row>
      </Grid>
      <Spacer size={30} />
      <Heading as="h5">
        Grow and shrink, taking into account its initial size
      </Heading>
      <Grid>
        <Grid.Row wrap="nowrap">
          <Grid.Col color="blue-200" flex="auto">
            lorem
          </Grid.Col>
          <Grid.Col color="yellow-200" flex="auto">
            cheramics hb
          </Grid.Col>
          <Grid.Col color="red-200" flex="auto">
            {faker.lorem.sentence()}
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Segment>
  </>
);

export default GridExampleFlex;
