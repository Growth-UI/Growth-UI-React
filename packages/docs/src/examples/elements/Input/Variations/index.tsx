import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const InputVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:input.label.id')}
        title={t('examples:input.label.title')}
        description={t('examples:input.label.description')}
        examplePath="elements/Input/Variations/InputExampleLabeled"
      />

      <ComponentExample
        id={t('examples:input.adornment.id')}
        title={t('examples:input.adornment.title')}
        description={t('examples:input.adornment.description')}
        examplePath="elements/Input/Variations/InputExampleAdornment"
      />

      <ComponentExample
        id={t('examples:input.filled.id')}
        title={t('examples:input.filled.title')}
        description={t('examples:input.filled.description')}
        examplePath="elements/Input/Variations/InputExampleFilled"
      />

      <ComponentExample
        id={t('examples:input.basic.id')}
        title={t('examples:input.basic.title')}
        description={t('examples:input.basic.description')}
        examplePath="elements/Input/Variations/InputExampleBasic"
      />

      <ComponentExample
        id={t('examples:input.icon.id')}
        title={t('examples:input.icon.title')}
        description={t('examples:input.icon.description')}
        examplePath="elements/Input/Variations/InputExampleIcon"
      />

      <ComponentExample
        id={t('examples:input.fluid.id')}
        title={t('examples:input.fluid.title')}
        description={t('examples:input.fluid.description')}
        examplePath="elements/Input/Variations/InputExampleFluid"
      />

      <ComponentExample
        id={t('examples:input.size.id')}
        title={t('examples:input.size.title')}
        description={t('examples:input.size.description')}
        examplePath="elements/Input/Variations/InputExampleSize"
      />
    </ExampleSection>
  );
};

export default InputVariationsExamples;
