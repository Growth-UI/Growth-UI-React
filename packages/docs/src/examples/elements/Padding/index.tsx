import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const PaddingExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:padding.padding.id')}
        title={t('examples:padding.padding.title')}
        description={t('examples:padding.padding.description')}
        examplePath="elements/Padding/PaddingExamplePadding"
      />
    </>
  );
};

export default PaddingExamples;
