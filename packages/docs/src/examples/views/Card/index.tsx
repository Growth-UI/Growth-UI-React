import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CardExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:card.card.id')}
        title={t('examples:card.card.title')}
        description={t('examples:card.card.description')}
        examplePath="views/Card/CardExampleCard"
      />

      <ComponentExample
        id={t('examples:card.group.id')}
        title={t('examples:card.group.title')}
        description={t('examples:card.group.description')}
        examplePath="views/Card/CardExampleGroup"
      />

      <ComponentExample
        id={t('examples:card.horizontal.id')}
        title={t('examples:card.horizontal.title')}
        description={t('examples:card.horizontal.description')}
        examplePath="views/Card/CardExampleHorizontal"
      />
    </>
  );
};

export default CardExamples;
