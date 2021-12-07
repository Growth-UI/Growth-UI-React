import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SpacerVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:spacer.axis.id')}
        title={t('examples:spacer.axis.title')}
        description={t('examples:spacer.axis.description')}
        examplePath="elements/Spacer/Variations/SpacerExampleAxis"
      />
    </ExampleSection>
  );
};

export default SpacerVariationsExamples;
