import capitalize from 'docs/utils/capitalize';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

type Props = {
  heading: string;
  type: string;
};

const renderExamples = (type: string, component: string) =>
  dynamic(() => import(`docs/examples/${type}/${capitalize(component)}`));

const ComponentExamples: FC<Props> = ({ heading, type }) => {
  const Examples = renderExamples(type, heading);

  return <Examples />;
};

export default ComponentExamples;
