import ComponentExample from '../../../components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const DateInputExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:dateinput.dateinput.id')}
        title={t('examples:dateinput.dateinput.title')}
        description={t('examples:dateinput.dateinput.description')}
        examplePath="addons/DateInput/DateInputExampleDateInput"
      />
    </>
  );
};

export default DateInputExamples;
