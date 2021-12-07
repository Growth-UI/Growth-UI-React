import ComponentCode from './ComponentCode';
import Grid from '@growth-ui/react/collections/Grid';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

type Props = {
  func?: {
    title: string;
    params: {
      name: string;
      description?: string;
    }[];
  };
};

const ComponentPropFunc = ({ func }: Props) => {
  if (!func) return null;

  return (
    <>
      <Spacer size={10} />
      <Paragraph fontSize="sm" style={{ opacity: 0.8 }}>
        <strong>{func.title}</strong>
      </Paragraph>
      <Spacer size={10} />
      {func.params.map((param) => (
        <Grid.Row key={param.name} verticalAlign="middle">
          <div style={{ minWidth: '130px' }}>
            <ComponentCode>{param.name}</ComponentCode>
          </div>
          <span>{param.description}</span>
        </Grid.Row>
      ))}
    </>
  );
};

export default ComponentPropFunc;
