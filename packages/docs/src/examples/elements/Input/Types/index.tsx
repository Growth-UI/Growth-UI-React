import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const InputTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:input.input.id')}
        title={t('examples:input.input.title')}
        description={t('examples:input.input.description')}
        examplePath="elements/Input/Types/InputExampleInput"
      />
    </ExampleSection>
  );
};

export default InputTypesExamples;
