import Grid from '../../collections/Grid';
import IconButton from '../../addons/IconButton';
import Paragraph, { StyledParagraph } from '../../elements/Paragraph';
import React, { FC, MouseEvent } from 'react';
import Spacer from '../../elements/Spacer';
import styled from 'styled-components';
import { createShorthandFactory, moment } from '../../lib';

export const StyledCalendarNavigation = styled.div<CalendarNavigationProps>`
  padding: 10px 20px;

  ${StyledParagraph} {
    animation-duration: 400ms;
    animation-name: slideup;
    transform: translateY(15px);
    animation-fill-mode: forwards;
  }

  @keyframes slideup {
    from {
      transform: translateY(15px);
      opacity: 0;
    }

    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const CalendarNavigation: FC<CalendarNavigationProps> & CalendarNavigationComponents = (props) => {
  const { month, search, year, onClickSearch, onClickPrevMonth, onClickNextMonth, ...rest } = props;

  const handleClickSearch = (e: MouseEvent<HTMLElement>) => {
    if (onClickSearch) {
      onClickSearch(e);
    }
  };

  return (
    <StyledCalendarNavigation {...rest}>
      <Grid.Row horizontalAlign="space-between" verticalAlign="middle">
        <Grid.Col>
          <Grid.Row verticalAlign="middle">
            <Paragraph key={month} style={{ fontWeight: 500 }}>
              {moment().setMonth(month).setYear(year).month('en-us', true)} {year}
            </Paragraph>
            <Spacer size={5} />
            <IconButton color="primary" flipped={search} name="triangle down" size={22} onClick={handleClickSearch} />
          </Grid.Row>
        </Grid.Col>
        <Grid.Col>
          <Grid.Row>
            <IconButton color="primary" name="chevron left" size={25} onClick={onClickPrevMonth} />
            <IconButton color="primary" name="chevron right" size={25} onClick={onClickNextMonth} />
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </StyledCalendarNavigation>
  );
};

CalendarNavigation.create = createShorthandFactory(CalendarNavigation, () => ({}));

interface CalendarNavigationComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

export interface CalendarNavigationProps extends StrictCalendarNavigationProps {
  [k: string]: any;
}

export interface StrictCalendarNavigationProps {
  /** Additional classes. */
  className?: string;

  /** Called on click search dropdown icon. */
  onClickSearch?: (event: MouseEvent<HTMLElement>) => void;

  /** Called on click prev icon. */
  onClickPrevMonth?: () => void;

  /** Called on click next icon. */
  onClickNextMonth?: () => void;
}

export default CalendarNavigation;
