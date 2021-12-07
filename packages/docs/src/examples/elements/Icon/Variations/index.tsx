import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const InputVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:icon.size.id')}
        title={t('examples:icon.size.title')}
        description={t('examples:icon.size.description')}
        examplePath="elements/Icon/Variations/IconExampleSize"
      />

      <ComponentExample
        id={t('examples:icon.color.id')}
        title={t('examples:icon.color.title')}
        description={t('examples:icon.color.description')}
        examplePath="elements/Icon/Variations/IconExampleColor"
      />
    </ExampleSection>
  );
};

export default InputVariationsExamples;
