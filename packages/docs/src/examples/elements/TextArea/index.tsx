import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TextAreaExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:text-area.text-area.id')}
        title={t('examples:text-area.text-area.title')}
        description={t('examples:text-area.text-area.description')}
        examplePath="elements/TextArea/TextAreaExampleTextArea"
      />

      <ComponentExample
        id={t('examples:text-area.label.id')}
        title={t('examples:text-area.label.title')}
        description={t('examples:text-area.label.description')}
        examplePath="elements/TextArea/TextAreaExampleLabel"
      />

      <ComponentExample
        id={t('examples:text-area.disabled.id')}
        title={t('examples:text-area.disabled.title')}
        description={t('examples:text-area.disabled.description')}
        examplePath="elements/TextArea/TextAreaExampleDisabled"
      />

      <ComponentExample
        id={t('examples:text-area.error.id')}
        title={t('examples:text-area.error.title')}
        description={t('examples:text-area.error.description')}
        examplePath="elements/TextArea/TextAreaExampleError"
      />

      <ComponentExample
        id={t('examples:text-area.fluid.id')}
        title={t('examples:text-area.fluid.title')}
        description={t('examples:text-area.fluid.description')}
        examplePath="elements/TextArea/TextAreaExampleFluid"
      />

      <ComponentExample
        id={t('examples:text-area.minHeight.id')}
        title={t('examples:text-area.minHeight.title')}
        description={t('examples:text-area.minHeight.description')}
        examplePath="elements/TextArea/TextAreaExampleMinHeight"
      />

      <ComponentExample
        id={t('examples:text-area.rows.id')}
        title={t('examples:text-area.rows.title')}
        description={t('examples:text-area.rows.description')}
        examplePath="elements/TextArea/TextAreaExampleRows"
      />
    </>
  );
};

export default TextAreaExamples;
