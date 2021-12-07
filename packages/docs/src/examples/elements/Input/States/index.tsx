import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const InputStatesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:states')}>
      <ComponentExample
        id={t('examples:input.disabled.id')}
        title={t('examples:input.disabled.title')}
        description={t('examples:input.disabled.description')}
        examplePath="elements/Input/States/InputExampleDisabled"
      />

      <ComponentExample
        id={t('examples:input.error.id')}
        title={t('examples:input.error.title')}
        description={t('examples:input.error.description')}
        examplePath="elements/Input/States/InputExampleError"
      />

      <ComponentExample
        id={t('examples:input.required.id')}
        title={t('examples:input.required.title')}
        description={t('examples:input.required.description')}
        examplePath="elements/Input/States/InputExampleRequired"
      />
    </ExampleSection>
  );
};

export default InputStatesExamples;
