import CalendarCell, { CalendarCellProps } from './CalendarCell';
import CalendarNavigation from './CalendarNavigation';
import CalendarSearch from './CalendarSearch';
import Grid from '../../collections/Grid';
import map from 'lodash/map';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import Spacer from '../../elements/Spacer';
import styled from 'styled-components';
import { COLORS } from '../../types';
import { moment } from '../../lib';

export const StyledCalendar = styled.div<CalendarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  font-size: 14px;
  width: 320px;
  max-height: 360px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
  color: var(--text);
  background: var(--bg);
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;

  @keyframes slidein {
    from {
      transform: translateX(30px);
      opacity: 0;
    }

    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

const Calendar: FC<CalendarProps> = (props) => {
  const { indicateWeekend = true, onChange, showNavigation = true, showToday = true, value, ...rest } = props;

  const [search, setSearch] = useState(false);
  const [weekNumber, setWeekNumber] = useState<number>();
  const [month, setMonth] = useState<number>(+moment().month());
  const [year, setYear] = useState<number>(+moment().year());

  useEffect(() => {
    if (value) {
      const m = moment(+new Date(value));

      setWeekNumber(m.date() as number);
      setMonth(m.month() as number);
      setYear(m.year() as number);
    }
  }, [value]);

  const handleChange = ({ year, month, weekNumber }: any) => {
    if (onChange) {
      onChange(new Date(year, month - 1, weekNumber));
    }
  };

  const handleClickSearch = () => {
    setSearch(!search);
  };

  const handleClickPrevMonth = () => {
    const prevMonth = (month - 1) % 12 || 12;

    if (prevMonth === 12) {
      setYear(year - 1);
    }

    setMonth(prevMonth);
    handleChange({ month: prevMonth, weekNumber, year: prevMonth === 12 ? year - 1 : year });
  };

  const handleClickNextMonth = () => {
    const nextMonth = (month + 1) % 12 || 12;

    if (nextMonth === 1) {
      setYear(year + 1);
    }

    setMonth(nextMonth);
    handleChange({ month: nextMonth, weekNumber, year: nextMonth === 1 ? year + 1 : year });
  };

  const handleClickWeekNumber = (e: MouseEvent<HTMLElement>, data: CalendarCellProps) => {
    const newWeekNumber = data.value === weekNumber ? undefined : data.value;

    handleChange({ month, year, weekNumber: newWeekNumber });
    setWeekNumber(newWeekNumber);
  };

  const handleSearchChange = (newMonth: number, newYear: number) => {
    setMonth(newMonth);
    setYear(newYear);
    setSearch(false);
    handleChange({ month: newMonth, year: newYear, weekNumber });
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------
  const renderDays = () => (
    <Grid.Row>
      {moment()
        .weekdaysShort()
        .map((day, i) => (
          <Grid.Col flex="1" horizontalAlign="center" key={i}>
            <span style={{ opacity: 0.5 }}>{day}</span>
          </Grid.Col>
        ))}
    </Grid.Row>
  );

  const renderWeekNumbers = () =>
    map(moment().setMonth(month).setYear(year).weekNumbers(weekNumber), (week, i) => (
      <Grid.Row
        key={`${month}-${i}`}
        style={{
          animationDuration: '500ms',
          animationName: 'slidein',
          animationFillMode: 'forwards',
        }}
      >
        {week.map((num, j) => (
          <Grid.Col flex="1" horizontalAlign="center" key={j}>
            {CalendarCell.create(num.value, {
              ...num,
              overrideProps: {
                onClick: handleClickWeekNumber,
                indicateWeekend,
                isToday: showToday ? num.isToday : false,
                isWeekend: indicateWeekend ? num.isWeekend : false,
              },
            })}
          </Grid.Col>
        ))}
      </Grid.Row>
    ));

  const renderSearch = () =>
    CalendarSearch.create('', {
      search,
      onChange: handleSearchChange,
    });

  const renderNavigation = () =>
    CalendarNavigation.create('', {
      month,
      year,
      search,
      overrideProps: {
        onClickSearch: handleClickSearch,
        onClickNextMonth: handleClickNextMonth,
        onClickPrevMonth: handleClickPrevMonth,
      },
    });

  return (
    <StyledCalendar {...rest}>
      {showNavigation && renderNavigation()}
      <Spacer size={10} />
      {renderDays()}
      <Spacer size={10} />
      {renderWeekNumbers()}
      {renderSearch()}
    </StyledCalendar>
  );
};

export interface CalendarProps extends StrictCalendarProps {
  [k: string]: any;
}

export interface StrictCalendarProps {
  /** Additional classes. */
  className?: string;

  /** Emphasize the weekends (Saturday and Sunday). */
  indicateWeekend?: boolean | COLORS;

  /** Callback fired when the value (the selected date) changes. */
  onChange?: (newDate: Date) => void;

  /** Show the navigation. */
  showNavigation?: boolean;

  /** If true, today will be highlighted. */
  showToday?: boolean;

  /** The value of the calendar. */
  value?: string | number | Date;
}

export default Calendar;
