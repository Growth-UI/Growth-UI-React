import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CheckboxVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:checkbox.rounded.id')}
        title={t('examples:checkbox.rounded.title')}
        description={t('examples:checkbox.rounded.description')}
        examplePath="modules/Checkbox/Variations/CheckboxExampleRounded"
      />

      <ComponentExample
        id={t('examples:checkbox.colors.id')}
        title={t('examples:checkbox.colors.title')}
        description={t('examples:checkbox.colors.description')}
        examplePath="modules/Checkbox/Variations/CheckboxExampleColors"
      />

      <ComponentExample
        id={t('examples:checkbox.outline.id')}
        title={t('examples:checkbox.outline.title')}
        description={t('examples:checkbox.outline.description')}
        examplePath="modules/Checkbox/Variations/CheckboxExampleOutline"
      />
    </ExampleSection>
  );
};

export default CheckboxVariationsExamples;
