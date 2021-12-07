import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SegmentTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:segment.segment.id')}
        title={t('examples:segment.segment.title')}
        description={t('examples:segment.segment.description')}
        examplePath="elements/Segment/Types/SegmentExampleSegment"
      />
    </ExampleSection>
  );
};

export default SegmentTypesExamples;
