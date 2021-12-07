import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const RefTypesExample = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:ref.ref.id')}
        title={t('examples:ref.ref.title')}
        description={t('examples:ref.ref.description')}
        examplePath="addons/Ref/Types/RefExamplesRef"
      />
    </ExampleSection>
  );
};

export default RefTypesExample;
