import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const MenuExamplesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:examples')}>
      <ComponentExample
        id={t('examples:menu.submenu.id')}
        title={t('examples:menu.submenu.title')}
        description={t('examples:menu.submenu.description')}
        examplePath="collections/Menu/Examples/MenuExampleSubMenu"
      />
    </ExampleSection>
  );
};

export default MenuExamplesExamples;
