import Grid from '@growth-ui/react/collections/Grid';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Skeleton from '@growth-ui/react/elements/Skeleton';

const SkeletonExampleSkeleton = () => (
  <>
    <Segment>
      <Skeleton />
    </Segment>

    <Segment>
      <div
        style={{
          height: '200px',
          width: '300px',
        }}
      >
        <Skeleton />
      </div>
    </Segment>

    <Segment>
      <Skeleton width={300} height={200} />
    </Segment>

    <Segment>
      <Skeleton rounded width={60} height={60} />
    </Segment>

    <Segment>
      <Grid.Row>
        <Grid.Col>
          <Skeleton width={250} height={150} />
        </Grid.Col>
        <Grid.Col flex="1">
          <Skeleton line height="1em" />
          <Skeleton line height="1em" width={300} />
          <Skeleton line height="1em" />
          <Skeleton line rounded height="1em" />
        </Grid.Col>
      </Grid.Row>
    </Segment>
  </>
);

export default SkeletonExampleSkeleton;
