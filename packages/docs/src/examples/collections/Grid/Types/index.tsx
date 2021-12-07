import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const GridTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:grid.grid.id')}
        title={t('examples:grid.grid.title')}
        description={t('examples:grid.grid.description')}
        examplePath="collections/Grid/Types/GridExampleGrid"
      />
    </ExampleSection>
  );
};

export default GridTypesExamples;
