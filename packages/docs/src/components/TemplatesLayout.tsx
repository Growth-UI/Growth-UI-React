import dynamic from 'next/dynamic';
import React from 'react';

type Props = {
  template: string;
};

const renderTemplate = (template: string) =>
  dynamic(() => import(`docs/templates/${template}/typescript`));

const TemplatesLayout = ({ template }: Props) => {
  const Template = renderTemplate(template);

  return <Template />;
};

export default TemplatesLayout;
