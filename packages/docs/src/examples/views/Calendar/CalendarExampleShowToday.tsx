import Calendar from '@growth-ui/react/views/Calendar';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const CalendarExampleShowToday = () => (
  <>
    <Calendar showToday={false} />
    <Spacer size={30} />
    <Calendar />
  </>
);

export default CalendarExampleShowToday;
