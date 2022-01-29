import Loader from '@growth-ui/react/elements/Loader';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const LoaderExampleSize = () => (
  <>
    <Segment padded>
      <Loader size="mini">Mini</Loader>
    </Segment>
    <Segment padded>
      <Loader size="tiny">Tiny</Loader>
    </Segment>
    <Segment padded>
      <Loader size="small">Small</Loader>
    </Segment>
    <Segment padded>
      <Loader size="medium">Medium</Loader>
    </Segment>
    <Segment padded>
      <Loader size="large">Large</Loader>
    </Segment>
    <Segment padded>
      <Loader size="big">Big</Loader>
    </Segment>
    <Segment padded>
      <Loader size="huge">Huge</Loader>
    </Segment>
    <Segment padded>
      <Loader size="massive">Massive</Loader>
    </Segment>
  </>
);

export default LoaderExampleSize;
