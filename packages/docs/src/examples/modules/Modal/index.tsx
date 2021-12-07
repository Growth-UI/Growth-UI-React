import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ModalExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:modal.modal.id')}
        title={t('examples:modal.modal.title')}
        description={t('examples:modal.modal.description')}
        examplePath="modules/Modal/ModalExampleModal"
      />

      <ComponentExample
        id={t('examples:modal.topAligned.id')}
        title={t('examples:modal.topAligned.title')}
        description={t('examples:modal.topAligned.description')}
        examplePath="modules/Modal/ModalExampleTopAligned"
      />

      <ComponentExample
        id={t('examples:modal.usage.id')}
        title={t('examples:modal.usage.title')}
        description={t('examples:modal.usage.description')}
        examplePath="modules/Modal/ModalExampleUsage"
      />
    </>
  );
};

export default ModalExamples;
