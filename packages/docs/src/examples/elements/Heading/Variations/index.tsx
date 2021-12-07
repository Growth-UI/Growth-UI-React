import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const InputVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:heading.textAlignment.id')}
        title={t('examples:heading.textAlignment.title')}
        description={t('examples:heading.textAlignment.description')}
        examplePath="elements/Heading/Variations/HeadingExampleTextAlignment"
      />

      <ComponentExample
        id={t('examples:heading.color.id')}
        title={t('examples:heading.color.title')}
        description={t('examples:heading.color.description')}
        examplePath="elements/Heading/Variations/HeadingExampleColor"
      />
    </ExampleSection>
  );
};

export default InputVariationsExamples;
