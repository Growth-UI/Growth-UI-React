import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ParagraphVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:paragraph.align.id')}
        title={t('examples:paragraph.align.title')}
        description={t('examples:paragraph.align.description')}
        examplePath="elements/Paragraph/Variations/ParagraphExampleAlign"
      />

      <ComponentExample
        id={t('examples:paragraph.lineHeight.id')}
        title={t('examples:paragraph.lineHeight.title')}
        description={t('examples:paragraph.lineHeight.description')}
        examplePath="elements/Paragraph/Variations/ParagraphExampleLineHeight"
      />

      <ComponentExample
        id={t('examples:paragraph.color.id')}
        title={t('examples:paragraph.color.title')}
        description={t('examples:paragraph.color.description')}
        examplePath="elements/Paragraph/Variations/ParagraphExampleColor"
      />

      <ComponentExample
        id={t('examples:paragraph.size.id')}
        title={t('examples:paragraph.size.title')}
        description={t('examples:paragraph.size.description')}
        examplePath="elements/Paragraph/Variations/ParagraphExampleSize"
      />
    </ExampleSection>
  );
};

export default ParagraphVariationsExamples;
