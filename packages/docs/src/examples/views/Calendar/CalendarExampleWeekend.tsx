import Calendar from '@growth-ui/react/views/Calendar';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const CalendarExampleWeekend = () => (
  <>
    <Calendar indicateWeekend={false} />
    <Spacer size={30} />
    <Calendar />
    <Spacer size={30} />
    <Calendar indicateWeekend="blue-300" />
  </>
);

export default CalendarExampleWeekend;
