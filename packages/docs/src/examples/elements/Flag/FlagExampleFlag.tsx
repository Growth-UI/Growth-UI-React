import Flag, { countryOptions } from '@growth-ui/react/elements/Flag';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';

const FlagExampleFlag = () => (
  <>
    <Segment>
      {countryOptions.map((option) => (
        <Flag name={option.name} key={option.key} />
      ))}
    </Segment>
  </>
);

export default FlagExampleFlag;
