import ComponentCode from './ComponentCode';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

type Props = {
  enums?: number[] | string[];
};

const ComponentPropEnum = ({ enums }: Props) => {
  if (!enums) return null;

  return (
    <>
      <Spacer size={10} />
      <Paragraph fontSize="sm">Enums:</Paragraph>
      <Spacer size={10} />
      {enums.map((e) => (
        <ComponentCode key={e}>{e}</ComponentCode>
      ))}
    </>
  );
};

export default ComponentPropEnum;
