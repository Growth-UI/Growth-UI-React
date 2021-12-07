import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const IconExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:icon-button.icon-button.id')}
        title={t('examples:icon-button.icon-button.title')}
        description={t('examples:icon-button.icon-button.description')}
        examplePath="addons/IconButton/IconButtonExampleIconButton"
      />

      <ComponentExample
        id={t('examples:icon-button.size.id')}
        title={t('examples:icon-button.size.title')}
        description={t('examples:icon-button.size.description')}
        examplePath="addons/IconButton/IconButtonExampleSize"
      />

      <ComponentExample
        id={t('examples:icon-button.color.id')}
        title={t('examples:icon-button.color.title')}
        description={t('examples:icon-button.color.description')}
        examplePath="addons/IconButton/IconButtonExampleColor"
      />
    </>
  );
};

export default IconExamples;
