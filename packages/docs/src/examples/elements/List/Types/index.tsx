import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ListTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:list.list.id')}
        title={t('examples:list.list.title')}
        description={t('examples:list.list.description')}
        examplePath="elements/List/Types/ListExampleList"
      />

      <ComponentExample
        id={t('examples:list.bulleted.id')}
        title={t('examples:list.bulleted.title')}
        description={t('examples:list.bulleted.description')}
        examplePath="elements/List/Types/ListExampleBulleted"
      />

      <ComponentExample
        id={t('examples:list.tree.id')}
        title={t('examples:list.tree.title')}
        description={t('examples:list.tree.description')}
        examplePath="elements/List/Types/ListExampleTree"
      />
    </ExampleSection>
  );
};

export default ListTypesExamples;
