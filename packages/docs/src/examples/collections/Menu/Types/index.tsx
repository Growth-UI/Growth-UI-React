import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const MenuTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:menu.menu.id')}
        title={t('examples:menu.menu.title')}
        description={t('examples:menu.menu.description')}
        examplePath="collections/Menu/Types/MenuExampleMenu"
      />

      <ComponentExample
        id={t('examples:menu.name.id')}
        title={t('examples:menu.name.title')}
        description={t('examples:menu.name.description')}
        examplePath="collections/Menu/Types/MenuExampleName"
      />

      <ComponentExample
        id={t('examples:menu.basic.id')}
        title={t('examples:menu.basic.title')}
        description={t('examples:menu.basic.description')}
        examplePath="collections/Menu/Types/MenuExampleBasic"
      />

      <ComponentExample
        id={t('examples:menu.secondary.id')}
        title={t('examples:menu.secondary.title')}
        description={t('examples:menu.secondary.description')}
        examplePath="collections/Menu/Types/MenuExampleSecondary"
      />

      <ComponentExample
        id={t('examples:menu.pointing.id')}
        title={t('examples:menu.pointing.title')}
        description={t('examples:menu.pointing.description')}
        examplePath="collections/Menu/Types/MenuExamplePointing"
      />

      <ComponentExample
        id={t('examples:menu.verticalMenu.id')}
        title={t('examples:menu.verticalMenu.title')}
        description={t('examples:menu.verticalMenu.description')}
        examplePath="collections/Menu/Types/MenuExampleVertical"
      />

      <ComponentExample
        id={t('examples:menu.verticalPointing.id')}
        title={t('examples:menu.verticalPointing.title')}
        description={t('examples:menu.verticalPointing.description')}
        examplePath="collections/Menu/Types/MenuExampleVerticalPointing"
      />

      <ComponentExample
        id={t('examples:menu.verticalSecondary.id')}
        title={t('examples:menu.verticalSecondary.title')}
        description={t('examples:menu.verticalSecondary.description')}
        examplePath="collections/Menu/Types/MenuExampleVerticalSecondary"
      />

      <ComponentExample
        id={t('examples:menu.verticalBasic.id')}
        title={t('examples:menu.verticalBasic.title')}
        description={t('examples:menu.verticalBasic.description')}
        examplePath="collections/Menu/Types/MenuExampleVerticalBasic"
      />

      <ComponentExample
        id={t('examples:menu.tabular.id')}
        title={t('examples:menu.tabular.title')}
        description={t('examples:menu.tabular.description')}
        examplePath="collections/Menu/Types/MenuExampleTabular"
      />

      <ComponentExample
        id={t('examples:menu.tabularOnLeft.id')}
        title={t('examples:menu.tabularOnLeft.title')}
        description={t('examples:menu.tabularOnLeft.description')}
        examplePath="collections/Menu/Types/MenuExampleTabularOnLeft"
      />

      <ComponentExample
        id={t('examples:menu.tabularOnRight.id')}
        title={t('examples:menu.tabularOnRight.title')}
        description={t('examples:menu.tabularOnRight.description')}
        examplePath="collections/Menu/Types/MenuExampleTabularOnRight"
      />
    </ExampleSection>
  );
};

export default MenuTypesExamples;
