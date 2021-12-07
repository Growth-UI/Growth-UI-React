import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const HeadingContentExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:content')}>
      <ComponentExample
        id={t('examples:heading.content.id')}
        title={t('examples:heading.content.title')}
        description={t('examples:heading.content.description')}
        examplePath="elements/Heading/Content/HeadingExampleContent"
      />

      <ComponentExample
        id={t('examples:heading.icon.id')}
        title={t('examples:heading.icon.title')}
        description={t('examples:heading.icon.description')}
        examplePath="elements/Heading/Content/HeadingExampleIcon"
      />
    </ExampleSection>
  );
};

export default HeadingContentExamples;
