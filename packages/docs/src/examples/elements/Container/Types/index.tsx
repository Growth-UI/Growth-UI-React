import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ContainerTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:container.container.id')}
        title={t('examples:container.container.title')}
        description={t('examples:container.container.description')}
        examplePath="elements/Container/Types/ContainerExampleContainer"
      />

      <ComponentExample
        id={t('examples:container.compact.id')}
        title={t('examples:container.compact.title')}
        description={t('examples:container.compact.description')}
        examplePath="elements/Container/Types/ContainerExampleCompact"
      />
    </ExampleSection>
  );
};

export default ContainerTypesExamples;
