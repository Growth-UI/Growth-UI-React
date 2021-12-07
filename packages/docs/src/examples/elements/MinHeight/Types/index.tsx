import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const MinHeightTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:min-height.min-height.id')}
        title={t('examples:min-height.min-height.title')}
        description={t('examples:min-height.min-height.description')}
        examplePath="elements/MinHeight/Types/MinHeightExampleMinHeight"
      />
    </ExampleSection>
  );
};

export default MinHeightTypesExamples;
