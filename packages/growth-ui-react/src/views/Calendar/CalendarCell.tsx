import invoke from 'lodash/invoke';
import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { createShorthandFactory, ripple } from '../../lib';

export const StyledCalendarCell = styled.div<CalendarCellProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 500rem;
  text-align: center;
  transition: background 400ms ease, color 400ms ease;
  color: var(--text);

  &:hover {
    background: var(--bg-hover);
  }

  ${({ active }) =>
    active &&
    `
    background: rgb(226, 237, 248);
    font-weight: 700;
    color: rgb(0, 127, 255);

    &:hover {
      background: rgb(0, 127, 255) !important;
      color: #fff;
    }
  `}

  ${({ isToday }) =>
    isToday &&
    `
    font-weight: 700;
  `}

  ${({ isWeekend, indicateWeekend }) => {
    if (!isWeekend) return '';

    if (typeof indicateWeekend === 'boolean') {
      return 'opacity: 0.6;';
    }

    return `color: var(--color-${indicateWeekend});`;
  }}
`;

const CalendarCell: FC<CalendarCellProps> & CalendarCellComponents = (props) => {
  const { children, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    ripple(e);
    invoke(props, 'onClick', e, props);
  };

  return (
    <StyledCalendarCell {...rest} onClick={handleClick}>
      {children}
    </StyledCalendarCell>
  );
};

CalendarCell.create = createShorthandFactory(CalendarCell);

interface CalendarCellComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

export interface CalendarCellProps extends StrictCalendarCellProps {
  [k: string]: any;
}

export interface StrictCalendarCellProps {
  /** A calendar can show it is currently the active user selection. */
  active?: boolean;

  /** Additional classes. */
  className?: string;

  /** Called on click. */
  onClick?: (e: MouseEvent<HTMLElement>, data: CalendarCellProps) => void;
}

export default CalendarCell;
