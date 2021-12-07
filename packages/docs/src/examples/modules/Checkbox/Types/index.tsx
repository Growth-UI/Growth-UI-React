import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CheckboxTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:checkbox.checkbox.id')}
        title={t('examples:checkbox.checkbox.title')}
        description={t('examples:checkbox.checkbox.description')}
        examplePath="modules/Checkbox/Types/CheckboxExampleCheckbox"
      />

      <ComponentExample
        id={t('examples:checkbox.radio.id')}
        title={t('examples:checkbox.radio.title')}
        description={t('examples:checkbox.radio.description')}
        examplePath="modules/Checkbox/Types/CheckboxExampleRadio"
      />

      <ComponentExample
        id={t('examples:checkbox.toggle.id')}
        title={t('examples:checkbox.toggle.title')}
        description={t('examples:checkbox.toggle.description')}
        examplePath="modules/Checkbox/Types/CheckboxExampleToggle"
      />

      <ComponentExample
        id={t('examples:checkbox.slider.id')}
        title={t('examples:checkbox.slider.title')}
        description={t('examples:checkbox.slider.description')}
        examplePath="modules/Checkbox/Types/CheckboxExampleSlider"
      />
    </ExampleSection>
  );
};

export default CheckboxTypesExamples;
