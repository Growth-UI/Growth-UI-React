import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SnackbarExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:snackbar.snackbar.id')}
        title={t('examples:snackbar.snackbar.title')}
        description={t('examples:snackbar.snackbar.description')}
        examplePath="views/Snackbar/SnackbarExampleSnackbar"
      />

      <ComponentExample
        id={t('examples:snackbar.basic.id')}
        title={t('examples:snackbar.basic.title')}
        description={t('examples:snackbar.basic.description')}
        examplePath="views/Snackbar/SnackbarExampleBasic"
      />

      <ComponentExample
        id={t('examples:snackbar.secondary.id')}
        title={t('examples:snackbar.secondary.title')}
        description={t('examples:snackbar.secondary.description')}
        examplePath="views/Snackbar/SnackbarExampleSecondary"
      />

      <ComponentExample
        id={t('examples:snackbar.fluid.id')}
        title={t('examples:snackbar.fluid.title')}
        description={t('examples:snackbar.fluid.description')}
        examplePath="views/Snackbar/SnackbarExampleFluid"
      />

      <ComponentExample
        id={t('examples:snackbar.emphasis.id')}
        title={t('examples:snackbar.emphasis.title')}
        description={t('examples:snackbar.emphasis.description')}
        examplePath="views/Snackbar/SnackbarExampleEmphasis"
      />

      <ComponentExample
        id={t('examples:snackbar.autoHideDuration.id')}
        title={t('examples:snackbar.autoHideDuration.title')}
        description={t('examples:snackbar.autoHideDuration.description')}
        examplePath="views/Snackbar/SnackbarExampleAutoHideDuration"
      />
    </>
  );
};

export default SnackbarExamples;
