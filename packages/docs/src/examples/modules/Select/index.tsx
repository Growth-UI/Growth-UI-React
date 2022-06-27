import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SelectTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:select.select.id')}
        title={t('examples:select.select.title')}
        description={t('examples:select.select.description')}
        examplePath="modules/Select/SelectExampleSelect"
      />

      <ComponentExample
        id={t('examples:select.multiple.id')}
        title={t('examples:select.multiple.title')}
        description={t('examples:select.multiple.description')}
        examplePath="modules/Select/SelectExampleMultiple"
      />

      <ComponentExample
        id={t('examples:select.clearable.id')}
        title={t('examples:select.clearable.title')}
        description={t('examples:select.clearable.description')}
        examplePath="modules/Select/SelectExampleClearable"
      />

      <ComponentExample
        id={t('examples:select.search.id')}
        title={t('examples:select.search.title')}
        description={t('examples:select.search.description')}
        examplePath="modules/Select/SelectExampleSearch"
      />

      <ComponentExample
        id={t('examples:select.scrolling.id')}
        title={t('examples:select.scrolling.title')}
        description={t('examples:select.scrolling.description')}
        examplePath="modules/Select/SelectExampleScrolling"
      />

      <ComponentExample
        id={t('examples:select.defaultValue.id')}
        title={t('examples:select.defaultValue.title')}
        description={t('examples:select.defaultValue.description')}
        examplePath="modules/Select/SelectExampleDefaultValue"
      />

      {/* <ComponentExample
        id={t('examples:select.examples.id')}
        title={t('examples:select.examples.title')}
        description={t('examples:select.examples.description')}
        examplePath="modules/Select/SelectExampleExamples"
      /> */}
    </>
  );
};

export default SelectTypesExamples;
