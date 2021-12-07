import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SidebarTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:sidebar.sidebar.id')}
        title={t('examples:sidebar.sidebar.title')}
        description={t('examples:sidebar.sidebar.description')}
        examplePath="modules/Sidebar/Types/SidebarExampleSidebar"
      />
    </ExampleSection>
  );
};

export default SidebarTypesExamples;
