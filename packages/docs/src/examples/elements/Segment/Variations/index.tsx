import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SegmentVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:segment.basic.id')}
        title={t('examples:segment.basic.title')}
        description={t('examples:segment.basic.description')}
        examplePath="elements/Segment/Variations/SegmentExampleBasic"
      />

      <ComponentExample
        id={t('examples:segment.emphasis.id')}
        title={t('examples:segment.emphasis.title')}
        description={t('examples:segment.emphasis.description')}
        examplePath="elements/Segment/Variations/SegmentExampleEmphasis"
      />

      <ComponentExample
        id={t('examples:segment.compact.id')}
        title={t('examples:segment.compact.title')}
        description={t('examples:segment.compact.description')}
        examplePath="elements/Segment/Variations/SegmentExampleCompact"
      />
    </ExampleSection>
  );
};

export default SegmentVariationsExamples;
