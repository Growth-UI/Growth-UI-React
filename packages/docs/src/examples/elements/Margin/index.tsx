import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const MarginExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:margin.margin.id')}
        title={t('examples:margin.margin.title')}
        description={t('examples:margin.margin.description')}
        examplePath="elements/Margin/MarginExampleMargin"
      />
    </>
  );
};

export default MarginExamples;
