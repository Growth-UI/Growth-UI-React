import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ListVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:list.collapse.id')}
        title={t('examples:list.collapse.title')}
        description={t('examples:list.collapse.description')}
        examplePath="elements/List/Variations/ListExampleCollapse"
      />

      <ComponentExample
        id={t('examples:list.animated.id')}
        title={t('examples:list.animated.title')}
        description={t('examples:list.animated.description')}
        examplePath="elements/List/Variations/ListExampleAnimated"
      />

      <ComponentExample
        id={t('examples:list.horizontal.id')}
        title={t('examples:list.horizontal.title')}
        description={t('examples:list.horizontal.description')}
        examplePath="elements/List/Variations/ListExampleHorizontal"
      />

      <ComponentExample
        id={t('examples:list.divided.id')}
        title={t('examples:list.divided.title')}
        description={t('examples:list.divided.description')}
        examplePath="elements/List/Variations/ListExampleDivided"
      />

      <ComponentExample
        id={t('examples:list.horizontalDivided.id')}
        title={t('examples:list.horizontalDivided.title')}
        description={t('examples:list.horizontalDivided.description')}
        examplePath="elements/List/Variations/ListExampleHorizontalDivided"
      />

      <ComponentExample
        id={t('examples:list.selection.id')}
        title={t('examples:list.selection.title')}
        description={t('examples:list.selection.description')}
        examplePath="elements/List/Variations/ListExampleSelection"
      />

      <ComponentExample
        id={t('examples:list.hoverColor.id')}
        title={t('examples:list.hoverColor.title')}
        description={t('examples:list.hoverColor.description')}
        examplePath="elements/List/Variations/ListExampleHoverColor"
      />

      <ComponentExample
        id={t('examples:list.padded.id')}
        title={t('examples:list.padded.title')}
        description={t('examples:list.padded.description')}
        examplePath="elements/List/Variations/ListExamplePadded"
      />

      <ComponentExample
        id={t('examples:list.relaxed.id')}
        title={t('examples:list.relaxed.title')}
        description={t('examples:list.relaxed.description')}
        examplePath="elements/List/Variations/ListExampleRelaxed"
      />

      <ComponentExample
        id={t('examples:list.horizontalRelaxed.id')}
        title={t('examples:list.horizontalRelaxed.title')}
        description={t('examples:list.horizontalRelaxed.description')}
        examplePath="elements/List/Variations/ListExampleHorizontalRelaxed"
      />
    </ExampleSection>
  );
};

export default ListVariationsExamples;
