import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/components/ComponentDoc/ExampleSection';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ImageVariationsExamples = () => {
  const { t } = useTranslation();

  return (
    <ExampleSection title={t('common:variations')}>
      <ComponentExample
        id={t('examples:image.bordered.id')}
        title={t('examples:image.bordered.title')}
        description={t('examples:image.bordered.description')}
        examplePath="elements/Image/Variations/ImageExampleBordered"
      />

      <ComponentExample
        id={t('examples:image.rounded.id')}
        title={t('examples:image.rounded.title')}
        description={t('examples:image.rounded.description')}
        examplePath="elements/Image/Variations/ImageExampleRounded"
      />

      <ComponentExample
        id={t('examples:image.circular.id')}
        title={t('examples:image.circular.title')}
        description={t('examples:image.circular.description')}
        examplePath="elements/Image/Variations/ImageExampleCircular"
      />

      <ComponentExample
        id={t('examples:image.center.id')}
        title={t('examples:image.center.title')}
        description={t('examples:image.center.description')}
        examplePath="elements/Image/Variations/ImageExampleCenter"
      />

      <ComponentExample
        id={t('examples:image.size.id')}
        title={t('examples:image.size.title')}
        description={t('examples:image.size.description')}
        examplePath="elements/Image/Variations/ImageExampleSize"
      />
    </ExampleSection>
  );
};

export default ImageVariationsExamples;
