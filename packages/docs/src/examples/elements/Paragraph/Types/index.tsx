import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ParagraphTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:paragraph.paragraph.id')}
        title={t('examples:paragraph.paragraph.title')}
        description={t('examples:paragraph.paragraph.description')}
        examplePath="elements/Paragraph/Types/ParagraphExamepleParagraph"
      />
    </ExampleSection>
  );
};

export default ParagraphTypesExamples;
