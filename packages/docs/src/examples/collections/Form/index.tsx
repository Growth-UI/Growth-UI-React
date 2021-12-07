import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const FormExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:form.form.id')}
        title={t('examples:form.form.title')}
        description={t('examples:form.form.description')}
        examplePath="collections/Form/FormExampleForm"
      />

      <ComponentExample
        id={t('examples:form.group.id')}
        title={t('examples:form.group.title')}
        description={t('examples:form.group.description')}
        examplePath="collections/Form/FormExampleGroup"
      />

      <ComponentExample
        id={t('examples:form.size.id')}
        title={t('examples:form.size.title')}
        description={t('examples:form.size.description')}
        examplePath="collections/Form/FormExampleSize"
      />
    </>
  );
};

export default FormExamples;
