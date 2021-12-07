import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const HeadingTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:heading.headings.id')}
        title={t('examples:heading.headings.title')}
        description={t('examples:heading.headings.description')}
        examplePath="elements/Heading/Types/HeadingExampleHeadings"
      />
    </ExampleSection>
  );
};

export default HeadingTypesExamples;
