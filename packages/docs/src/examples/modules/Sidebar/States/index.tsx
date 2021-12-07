import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SidebarStatesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:states')}>
      <ComponentExample
        id={t('examples:sidebar.dimmed.id')}
        title={t('examples:sidebar.dimmed.title')}
        description={t('examples:sidebar.dimmed.description')}
        examplePath="modules/Sidebar/States/SidebarExampleDimmed"
      />
    </ExampleSection>
  );
};

export default SidebarStatesExamples;
