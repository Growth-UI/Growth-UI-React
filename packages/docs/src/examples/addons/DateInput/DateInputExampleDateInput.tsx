import DateInput from '@growth-ui/react/addons/DateInput';
import Input from '@growth-ui/react/elements/Input';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const DateInputExampleDateInput = () => (
  <div>
    <DateInput
      mask="mm/dd/yyyy hh:mm:ss"
      renderInput={(params) => (
        <input {...params} placeholder="mm/dd/yyyy hh:mm:ss" />
      )}
    />
    <Spacer size={30} />
    <DateInput
      mask="mm.dd.yyyy"
      renderInput={(params) => <input {...params} placeholder="mm.dd.yyyy" />}
    />
    <Spacer size={30} />
    <DateInput
      mask="mm/yyyy"
      renderInput={(params) => (
        <Input {...params} label="Date" placeholder="mm/yyyy" />
      )}
    />
    <Spacer size={30} />
    <DateInput
      mask="yyyy-mm-dd"
      renderInput={(params) => (
        <Input {...params} label="Basic example" placeholder="yyyy-mm-dd" />
      )}
    />
  </div>
);

export default DateInputExampleDateInput;
