import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ContainerVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:container.textAlignment.id')}
        title={t('examples:container.textAlignment.title')}
        description={t('examples:container.textAlignment.description')}
        examplePath="elements/Container/Variations/ContainerExampleTextAlignment"
      />

      <ComponentExample
        id={t('examples:container.shadow.id')}
        title={t('examples:container.shadow.title')}
        description={t('examples:container.shadow.description')}
        examplePath="elements/Container/Variations/ContainerExampleShadow"
      />

      <ComponentExample
        id={t('examples:container.padded.id')}
        title={t('examples:container.padded.title')}
        description={t('examples:container.padded.description')}
        examplePath="elements/Container/Variations/ContainerExamplePadded"
      />

      <ComponentExample
        id={t('examples:container.fluid.id')}
        title={t('examples:container.fluid.title')}
        description={t('examples:container.fluid.description')}
        examplePath="elements/Container/Variations/ContainerExampleFluid"
      />
    </ExampleSection>
  );
};

export default ContainerVariationsExamples;
