import DateInput from '../../addons/DateInput';
import React, { FC, FormEvent, useRef } from 'react';
import styled from 'styled-components';
import { createShorthandFactory } from '../../lib';

export const StyledCalendarSearch = styled.div<CalendarSearchProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(60px);
  transition: transform 400ms ease;
  background: var(--bg);

  ${({ search }) =>
    !search &&
    `
    transform: translateY(100%);
  `}

  input {
    display: block;
    margin: 30px auto;
    border: none;
    outline: none;
    font-size: 54px;
    width: 220px;
  }
`;

const CalendarSearch: FC<CalendarSearchProps> & CalendarSearchComponents = (props) => {
  const { search, searchPlaceholder = 'mm/yyyy', onChange } = props;

  let month = useRef<number>().current;
  let year = useRef<number>().current;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (month && year) {
      onChange(month, year);
    }
  };

  const handleChange = (_: any, date: string) => {
    month = +date.split('/')[0];
    year = +date.split('/')[1];
  };

  return (
    <StyledCalendarSearch search={search}>
      <form onSubmit={handleSubmit}>
        <DateInput
          mask="mm/yyyy"
          onChange={handleChange}
          renderInput={(params) => <input {...params} placeholder={searchPlaceholder} />}
        />
      </form>
    </StyledCalendarSearch>
  );
};

CalendarSearch.create = createShorthandFactory(CalendarSearch);

interface CalendarSearchComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

export interface CalendarSearchProps extends StrictCalendarSearchProps {
  [k: string]: any;
}

export interface StrictCalendarSearchProps {
  /** Additional classes. */
  className?: string;
}

export default CalendarSearch;
