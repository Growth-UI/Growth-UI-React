import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SkeletonExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:skeleton.skeleton.id')}
        title={t('examples:skeleton.skeleton.title')}
        description={t('examples:skeleton.skeleton.description')}
        examplePath="elements/Skeleton/SkeletonExampleSkeleton"
      />
    </>
  );
};

export default SkeletonExamples;
