import ComponentExample from '../../../components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const LoaderExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:loader.loader.id')}
        title={t('examples:loader.loader.title')}
        description={t('examples:loader.loader.description')}
        examplePath="elements/Loader/LoaderExampleLoader"
      />

      <ComponentExample
        id={t('examples:loader.text.id')}
        title={t('examples:loader.text.title')}
        description={t('examples:loader.text.description')}
        examplePath="elements/Loader/LoaderExampleText"
      />

      <ComponentExample
        id={t('examples:loader.indeterminate.id')}
        title={t('examples:loader.indeterminate.title')}
        description={t('examples:loader.indeterminate.description')}
        examplePath="elements/Loader/LoaderExampleIndeterminate"
      />

      <ComponentExample
        id={t('examples:loader.color.id')}
        title={t('examples:loader.color.title')}
        description={t('examples:loader.color.description')}
        examplePath="elements/Loader/LoaderExampleColor"
      />

      <ComponentExample
        id={t('examples:loader.inline.id')}
        title={t('examples:loader.inline.title')}
        description={t('examples:loader.inline.description')}
        examplePath="elements/Loader/LoaderExampleInline"
      />

      <ComponentExample
        id={t('examples:loader.center.id')}
        title={t('examples:loader.center.title')}
        description={t('examples:loader.center.description')}
        examplePath="elements/Loader/LoaderExampleInlineCenter"
      />

      <ComponentExample
        id={t('examples:loader.size.id')}
        title={t('examples:loader.size.title')}
        description={t('examples:loader.size.description')}
        examplePath="elements/Loader/LoaderExampleSize"
      />
    </>
  );
};

export default LoaderExamples;
