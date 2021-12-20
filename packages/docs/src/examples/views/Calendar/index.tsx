import ComponentExample from 'docs/components/ComponentDoc/ComponentExample';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CalendarExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t('examples:calendar.calendar.id')}
        title={t('examples:calendar.calendar.title')}
        description={t('examples:calendar.calendar.description')}
        examplePath="views/Calendar/CalendarExampleCalendar"
      />

      <ComponentExample
        id={t('examples:calendar.showToday.id')}
        title={t('examples:calendar.showToday.title')}
        description={t('examples:calendar.showToday.description')}
        examplePath="views/Calendar/CalendarExampleShowToday"
      />

      <ComponentExample
        id={t('examples:calendar.showNavigation.id')}
        title={t('examples:calendar.showNavigation.title')}
        description={t('examples:calendar.showNavigation.description')}
        examplePath="views/Calendar/CalendarExampleShowNavigation"
      />

      <ComponentExample
        id={t('examples:calendar.weekend.id')}
        title={t('examples:calendar.weekend.title')}
        description={t('examples:calendar.weekend.description')}
        examplePath="views/Calendar/CalendarExampleWeekend"
      />

      <ComponentExample
        id={t('examples:calendar.capture.id')}
        title={t('examples:calendar.capture.title')}
        description={t('examples:calendar.capture.description')}
        examplePath="views/Calendar/CalendarExampleCapture"
      />
    </>
  );
};

export default CalendarExamples;
