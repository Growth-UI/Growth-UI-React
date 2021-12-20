import isNaN from 'lodash/isNaN';
import times from 'lodash/times';

export default function moment(input: string | number = +new Date()) {
  const inputDate = new Date(input);

  function isValid(d: Date) {
    if (isNaN(+d)) {
      return false;
    }

    return true;
  }

  const now = +new Date();

  function setMonth(month: number) {
    inputDate.setMonth(month - 1);

    return moment(+inputDate);
  }

  function setYear(year: number) {
    inputDate.setFullYear(year);

    return moment(+inputDate);
  }

  function getMonth(locale?: string, long = false) {
    if (!isValid(inputDate)) {
      return new Date(NaN);
    }

    if (!locale) {
      return inputDate.getMonth() + 1;
    }

    return inputDate.toLocaleString(locale, { month: long ? 'long' : 'short' });
  }

  function getYear() {
    if (!isValid(inputDate)) {
      return new Date(NaN);
    }

    return inputDate.getFullYear();
  }

  function getDate() {
    if (!isValid(inputDate)) {
      return new Date(NaN);
    }

    return inputDate.getDate();
  }

  function listWeekdays(locale = 'en-us') {
    return times(7).map((i) => {
      return new Date(1970, 0, 4 + i).toLocaleDateString(locale, { weekday: 'long' });
    });
  }

  function listWeekdaysShort(locale = 'en-us') {
    return times(7).map((i) => {
      return new Date(1970, 0, 4 + i).toLocaleDateString(locale, { weekday: 'long' })[0].toUpperCase();
    });
  }

  function createWeekNumberItemFactory(activeWeekNumber: number, date: Date) {
    return function createWeekNumberItem(weekNumber?: number) {
      if (weekNumber) {
        date.setDate(weekNumber);
      }

      return {
        type: 'weekNumber',
        active: activeWeekNumber === weekNumber,
        value: weekNumber,
        isToday: new Date().getDate() === weekNumber,
        isWeekend: (weekNumber && date.getDay() === 0) || date.getDay() === 6,
      };
    };
  }

  function listWeekNumbers(activeWeekNumber?: number | string) {
    const map = [];
    const month = +getMonth() - 1;
    const year = +getYear();
    const date = new Date(year, month);
    const day = date.getDay();

    const createWeekNumberItem = createWeekNumberItemFactory(+activeWeekNumber!, date);

    // spaces for the first row.
    // * * * 1 2 3 4
    for (let i = 0; i < day; i++) {
      map.push(createWeekNumberItem());
    }

    // actual dates
    while (date.getMonth() === month) {
      const currentDate = date.getDate();

      map.push(createWeekNumberItem(currentDate));
      date.setDate(currentDate + 1);
    }

    // spaces for the last row.
    // 29 30 * * * * *
    if (date.getDay() !== 0) {
      for (let i = date.getDay(); i < 7; i++) {
        map.push(createWeekNumberItem());
      }
    }

    const rows = map.length / 7;
    const weekNumbers: Record<string, any>[][] = [];

    for (let i = 0; i < rows; i++) {
      weekNumbers.push(map.splice(0, 7));
    }

    return weekNumbers;
  }

  return {
    now,
    month: getMonth,
    year: getYear,
    date: getDate,
    weekdays: listWeekdays,
    weekdaysShort: listWeekdaysShort,
    weekNumbers: listWeekNumbers,
    setMonth,
    setYear,
    isValid,
  };
}
