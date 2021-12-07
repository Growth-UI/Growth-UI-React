import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TableTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:table.table.id')}
        title={t('examples:table.table.title')}
        description={t('examples:table.table.description')}
        examplePath="collections/Table/Types/TableExampleTable"
      />

      <ComponentExample
        id={t('examples:table.padded.id')}
        title={t('examples:table.padded.title')}
        description={t('examples:table.padded.description')}
        examplePath="collections/Table/Types/TableExamplePadded"
      />

      <ComponentExample
        id={t('examples:table.basic.id')}
        title={t('examples:table.basic.title')}
        description={t('examples:table.basic.description')}
        examplePath="collections/Table/Types/TableExampleBasic"
      />

      <ComponentExample
        id={t('examples:table.celledBasic.id')}
        title={t('examples:table.celledBasic.title')}
        description={t('examples:table.celledBasic.description')}
        examplePath="collections/Table/Types/TableExampleCelledBasic"
      />

      <ComponentExample
        id={t('examples:table.celledStriped.id')}
        title={t('examples:table.celledStriped.title')}
        description={t('examples:table.celledStriped.description')}
        examplePath="collections/Table/Types/TableExampleCelledStriped"
      />

      <ComponentExample
        id={t('examples:table.definition.id')}
        title={t('examples:table.definition.title')}
        description={t('examples:table.definition.description')}
        examplePath="collections/Table/Types/TableExampleDefinition"
      />
    </ExampleSection>
  );
};

export default TableTypesExamples;
