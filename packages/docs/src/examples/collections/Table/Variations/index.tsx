import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TableVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:table.footer.id')}
        title={t('examples:table.footer.title')}
        description={t('examples:table.footer.description')}
        examplePath="collections/Table/Variations/TableExampleFooter"
      />

      <ComponentExample
        id={t('examples:table.unstackable.id')}
        title={t('examples:table.unstackable.title')}
        description={t('examples:table.unstackable.description')}
        examplePath="collections/Table/Variations/TableExampleUnstackable"
      />

      <ComponentExample
        id={t('examples:table.textAlignment.id')}
        title={t('examples:table.textAlignment.title')}
        description={t('examples:table.textAlignment.description')}
        examplePath="collections/Table/Variations/TableExampleTextAlignment"
      />

      <ComponentExample
        id={t('examples:table.size.id')}
        title={t('examples:table.size.title')}
        description={t('examples:table.size.description')}
        examplePath="collections/Table/Variations/TableExampleSize"
      />

      <ComponentExample
        id={t('examples:table.large.id')}
        title={t('examples:table.large.title')}
        description={t('examples:table.large.description')}
        examplePath="collections/Table/Variations/TableExampleLarge"
      />
    </ExampleSection>
  );
};

export default TableVariationsExamples;
