import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const PaginationExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:pagination.pagination.id')}
        title={t('examples:pagination.pagination.title')}
        description={t('examples:pagination.pagination.description')}
        examplePath="modules/Pagination/PaginationExamplePagination"
      />

      <ComponentExample
        id={t('examples:pagination.circular.id')}
        title={t('examples:pagination.circular.title')}
        description={t('examples:pagination.circular.description')}
        examplePath="modules/Pagination/PaginationExampleCircular"
      />

      <ComponentExample
        id={t('examples:pagination.secondary.id')}
        title={t('examples:pagination.secondary.title')}
        description={t('examples:pagination.secondary.description')}
        examplePath="modules/Pagination/PaginationExampleSecondary"
      />

      <ComponentExample
        id={t('examples:pagination.color.id')}
        title={t('examples:pagination.color.title')}
        description={t('examples:pagination.color.description')}
        examplePath="modules/Pagination/PaginationExampleColor"
      />

      <ComponentExample
        id={t('examples:pagination.size.id')}
        title={t('examples:pagination.size.title')}
        description={t('examples:pagination.size.description')}
        examplePath="modules/Pagination/PaginationExampleSize"
      />

      <ComponentExample
        id={t('examples:pagination.options.id')}
        title={t('examples:pagination.options.title')}
        description={t('examples:pagination.options.description')}
        examplePath="modules/Pagination/PaginationExampleOptions"
      />
    </>
  );
};

export default PaginationExamples;
