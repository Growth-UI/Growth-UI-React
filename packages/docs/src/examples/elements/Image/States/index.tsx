import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ImageStatesExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:states')}>
      <ComponentExample
        id={t('examples:image.hidden.id')}
        title={t('examples:image.hidden.title')}
        description={t('examples:image.hidden.description')}
        examplePath="elements/Image/States/ImageExampleHidden"
      />
    </ExampleSection>
  );
};

export default ImageStatesExamples;
