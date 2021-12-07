import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SidebarExamplesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:examples')}>
      <ComponentExample
        id={t('examples:sidebar.transition.id')}
        title={t('examples:sidebar.transition.title')}
        description={t('examples:sidebar.transition.description')}
        examplePath="modules/Sidebar/Examples/SidebarExampleTransitions"
      />
    </ExampleSection>
  );
};

export default SidebarExamplesExamples;
