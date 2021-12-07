import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const DropdownTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:dropdown.dropdown.id')}
        title={t('examples:dropdown.dropdown.title')}
        description={t('examples:dropdown.dropdown.description')}
        examplePath="modules/Dropdown/Types/DropdownExampleDropdown"
      />

      <ComponentExample
        id={t('examples:dropdown.selection.id')}
        title={t('examples:dropdown.selection.title')}
        description={t('examples:dropdown.selection.description')}
        examplePath="modules/Dropdown/Types/DropdownExampleSelection"
      />

      <ComponentExample
        id={t('examples:dropdown.simple.id')}
        title={t('examples:dropdown.simple.title')}
        description={t('examples:dropdown.simple.description')}
        examplePath="modules/Dropdown/Types/DropdownExampleSimple"
      />
    </ExampleSection>
  );
};

export default DropdownTypesExamples;
