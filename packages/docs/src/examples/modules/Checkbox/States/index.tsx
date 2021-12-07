import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CheckboxStatesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:states')}>
      <ComponentExample
        id={t('examples:checkbox.disabled.id')}
        title={t('examples:checkbox.disabled.title')}
        description={t('examples:checkbox.disabled.description')}
        examplePath="modules/Checkbox/States/CheckboxExampleDisabled"
      />
    </ExampleSection>
  );
};

export default CheckboxStatesExamples;
