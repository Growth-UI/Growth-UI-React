import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const GridVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:grid.floated.id')}
        title={t('examples:grid.floated.title')}
        description={t('examples:grid.floated.description')}
        examplePath="collections/Grid/Variations/GridExampleFloated"
      />

      <ComponentExample
        id={t('examples:grid.flex.id')}
        title={t('examples:grid.flex.title')}
        description={t('examples:grid.flex.description')}
        examplePath="collections/Grid/Variations/GridExampleFlex"
      />

      <ComponentExample
        id={t('examples:grid.cloumnCount.id')}
        title={t('examples:grid.cloumnCount.title')}
        description={t('examples:grid.cloumnCount.description')}
        examplePath="collections/Grid/Variations/GridExampleColumnCount"
      />

      <ComponentExample
        id={t('examples:grid.cloumnWidth.id')}
        title={t('examples:grid.cloumnWidth.title')}
        description={t('examples:grid.cloumnWidth.description')}
        examplePath="collections/Grid/Variations/GridExampleColumnWidth"
      />

      <ComponentExample
        id={t('examples:grid.columnCountPerRow.id')}
        title={t('examples:grid.columnCountPerRow.title')}
        description={t('examples:grid.columnCountPerRow.description')}
        examplePath="collections/Grid/Variations/GridExampleColumnCountPerRow"
      />

      <ComponentExample
        id={t('examples:grid.stretched.id')}
        title={t('examples:grid.stretched.title')}
        description={t('examples:grid.stretched.description')}
        examplePath="collections/Grid/Variations/GridExampleStretched"
      />

      <ComponentExample
        id={t('examples:grid.padded.id')}
        title={t('examples:grid.padded.title')}
        description={t('examples:grid.padded.description')}
        examplePath="collections/Grid/Variations/GridExamplePadded"
      />

      <ComponentExample
        id={t('examples:grid.paddedVerically.id')}
        title={t('examples:grid.paddedVerically.title')}
        description={t('examples:grid.paddedVerically.description')}
        examplePath="collections/Grid/Variations/GridExamplePaddedVertically"
      />

      <ComponentExample
        id={t('examples:grid.paddedHorizontally.id')}
        title={t('examples:grid.paddedHorizontally.title')}
        description={t('examples:grid.paddedHorizontally.description')}
        examplePath="collections/Grid/Variations/GridExamplePaddedHorizontally"
      />

      <ComponentExample
        id={t('examples:grid.relaxed.id')}
        title={t('examples:grid.relaxed.title')}
        description={t('examples:grid.relaxed.description')}
        examplePath="collections/Grid/Variations/GridExampleRelaxed"
      />

      <ComponentExample
        id={t('examples:grid.colored.id')}
        title={t('examples:grid.colored.title')}
        description={t('examples:grid.colored.description')}
        examplePath="collections/Grid/Variations/GridExampleColoredColumn"
      />

      <ComponentExample
        id={t('examples:grid.coloredRow.id')}
        title={t('examples:grid.coloredRow.title')}
        description={t('examples:grid.coloredRow.description')}
        examplePath="collections/Grid/Variations/GridExampleColoredRow"
      />

      <ComponentExample
        id={t('examples:grid.reversed.id')}
        title={t('examples:grid.reversed.title')}
        description={t('examples:grid.reversed.description')}
        examplePath="collections/Grid/Variations/GridExampleReversed"
      />

      <ComponentExample
        id={t('examples:grid.responsiveReverse.id')}
        title={t('examples:grid.responsiveReverse.title')}
        description={t('examples:grid.responsiveReverse.description')}
        examplePath="collections/Grid/Variations/GridExampleResponsiveReverse"
      />

      <ComponentExample
        id={t('examples:grid.only.id')}
        title={t('examples:grid.only.title')}
        description={t('examples:grid.only.description')}
        examplePath="collections/Grid/Variations/GridExampleOnly"
      />

      <ComponentExample
        id={t('examples:grid.responsiveWidth.id')}
        title={t('examples:grid.responsiveWidth.title')}
        description={t('examples:grid.responsiveWidth.description')}
        examplePath="collections/Grid/Variations/GridExampleResponsiveWidth"
      />
    </ExampleSection>
  );
};

export default GridVariationsExamples;
