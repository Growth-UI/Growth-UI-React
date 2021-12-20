import Calendar from '@growth-ui/react/views/Calendar';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const CalendarExampleCapture = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Paragraph>Date: {date?.toJSON()}</Paragraph>
      <Spacer size={30} />
      <Calendar onChange={(newDate) => setDate(newDate)} />
    </>
  );
};

export default CalendarExampleCapture;
