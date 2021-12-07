import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ListStatesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:states')}>
      <ComponentExample
        id={t('examples:list.active.id')}
        title={t('examples:list.active.title')}
        description={t('examples:list.active.description')}
        examplePath="elements/List/States/ListExampleActive"
      />
    </ExampleSection>
  );
};

export default ListStatesExamples;
