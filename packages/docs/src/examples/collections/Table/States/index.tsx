import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TableStatesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:states')}>
      <ComponentExample
        id={t('examples:table.positiveNegative.id')}
        title={t('examples:table.positiveNegative.title')}
        description={t('examples:table.positiveNegative.description')}
        examplePath="collections/Table/States/TableExamplePositiveNegative"
      />

      <ComponentExample
        id={t('examples:table.fixed.id')}
        title={t('examples:table.fixed.title')}
        description={t('examples:table.fixed.description')}
        examplePath="collections/Table/States/TableExampleFixed"
      />

      <ComponentExample
        id={t('examples:table.singleLine.id')}
        title={t('examples:table.singleLine.title')}
        description={t('examples:table.singleLine.description')}
        examplePath="collections/Table/States/TableExampleSingleLine"
      />
    </ExampleSection>
  );
};

export default TableStatesExamples;
