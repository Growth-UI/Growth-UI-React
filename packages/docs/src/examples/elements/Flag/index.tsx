import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const FlagExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:flag.flag.id')}
        title={t('examples:flag.flag.title')}
        description={t('examples:flag.flag.description')}
        examplePath="elements/Flag/FlagExampleFlag"
      />
    </>
  );
};

export default FlagExamples;
