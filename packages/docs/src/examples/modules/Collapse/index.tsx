import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CollapseTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:collapse.collapse.id')}
        title={t('examples:collapse.collapse.title')}
        description={t('examples:collapse.collapse.description')}
        examplePath="modules/Collapse/CollapseExampleCollapse"
      />
    </>
  );
};

export default CollapseTypesExamples;
