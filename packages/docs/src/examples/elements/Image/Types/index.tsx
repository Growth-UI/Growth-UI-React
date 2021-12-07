import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ImageTypesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:types')}>
      <ComponentExample
        id={t('examples:image.image.id')}
        title={t('examples:image.image.title')}
        description={t('examples:image.image.description')}
        examplePath="elements/Image/Types/ImageExampleImage"
      />
    </ExampleSection>
  );
};

export default ImageTypesExamples;
