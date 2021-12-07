import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const DividerVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:divider.inverted.id')}
        title={t('examples:divider.inverted.title')}
        description={t('examples:divider.inverted.description')}
        examplePath="elements/Divider/Variations/DividerExampleInverted"
      />
    </ExampleSection>
  );
};

export default DividerVariationsExamples;
