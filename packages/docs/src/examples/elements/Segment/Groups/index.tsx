import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SegmentVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:groups')}>
      <ComponentExample
        id={t('examples:segment.segments.id')}
        title={t('examples:segment.segments.title')}
        description={t('examples:segment.segments.description')}
        examplePath="elements/Segment/Groups/SegmentExampleSegments"
      />

      <ComponentExample
        id={t('examples:segment.horizontalSegments.id')}
        title={t('examples:segment.horizontalSegments.title')}
        description={t('examples:segment.horizontalSegments.description')}
        examplePath="elements/Segment/Groups/SegmentExampleHorizontalSegments"
      />

      <ComponentExample
        id={t('examples:segment.basicSegments.id')}
        title={t('examples:segment.basicSegments.title')}
        description={t('examples:segment.basicSegments.description')}
        examplePath="elements/Segment/Groups/SegmentExamplesBasicSegments"
      />

      <ComponentExample
        id={t('examples:segment.compactSegments.id')}
        title={t('examples:segment.compactSegments.title')}
        description={t('examples:segment.compactSegments.description')}
        examplePath="elements/Segment/Groups/SegmentExamplesCompactSegments"
      />
    </ExampleSection>
  );
};

export default SegmentVariationsExamples;
