import Calendar from '@growth-ui/react/views/Calendar';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const CalendarExampleShowNavigation = () => (
  <>
    <Calendar showNavigation={false} />
    <Spacer size={30} />
    <Calendar />
  </>
);

export default CalendarExampleShowNavigation;
