import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ImageListExampleImageList = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:imagelist.imagelist.id')}
        title={t('examples:imagelist.imagelist.title')}
        description={t('examples:imagelist.imagelist.description')}
        examplePath="collections/ImageList/ImageListExampleImageList"
      />

      <ComponentExample
        id={t('examples:imagelist.titlebar.id')}
        title={t('examples:imagelist.titlebar.title')}
        description={t('examples:imagelist.titlebar.description')}
        examplePath="collections/ImageList/ImageListTitlebarStandard"
      />

      <ComponentExample
        id={t('examples:imagelist.thumbnail.id')}
        title={t('examples:imagelist.thumbnail.title')}
        description={t('examples:imagelist.thumbnail.description')}
        examplePath="collections/ImageList/ItemListExampleThumbnail"
      />

      <ComponentExample
        id={t('examples:imagelist.responsive.id')}
        title={t('examples:imagelist.responsive.title')}
        description={t('examples:imagelist.responsive.description')}
        examplePath="collections/ImageList/ItemListResponsive"
      />
    </>
  );
};

export default ImageListExampleImageList;
