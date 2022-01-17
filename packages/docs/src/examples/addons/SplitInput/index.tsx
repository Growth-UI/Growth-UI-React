import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SplitInputExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:splitinput.splitinput.id')}
        title={t('examples:splitinput.splitinput.title')}
        description={t('examples:splitinput.splitinput.description')}
        examplePath="addons/SplitInput/SplitInputExampleSplitInput"
      />

      <ComponentExample
        id={t('examples:splitinput.onEnd.id')}
        title={t('examples:splitinput.onEnd.title')}
        description={t('examples:splitinput.onEnd.description')}
        examplePath="addons/SplitInput/SplitInputExampleOnEnd"
      />

      <ComponentExample
        id={t('examples:splitinput.size.id')}
        title={t('examples:splitinput.size.title')}
        description={t('examples:splitinput.size.description')}
        examplePath="addons/SplitInput/SplitInputExampleSize"
      />
    </>
  );
};

export default SplitInputExamples;
