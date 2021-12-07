import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ProgressiveImageTypesExample = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:progressive-image.progressive-image.id')}
        title={t('examples:progressive-image.progressive-image.title')}
        description={t(
          'examples:progressive-image.progressive-image.description',
        )}
        examplePath="addons/ProgressiveImage/Types/ProgressiveImageExamplesProgressiveImage"
      />
    </ExampleSection>
  );
};

export default ProgressiveImageTypesExample;
