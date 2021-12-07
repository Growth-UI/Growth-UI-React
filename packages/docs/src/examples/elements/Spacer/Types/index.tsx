import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SpacerTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:spacer.spacer.id')}
        title={t('examples:spacer.spacer.title')}
        description={t('examples:spacer.spacer.description')}
        examplePath="elements/Spacer/Types/SpacerExampleSpacer"
      />
    </ExampleSection>
  );
};

export default SpacerTypesExamples;
