import React, { CSSProperties, FC } from 'react';
import SegmentGroup, { StyledSegmentGroup } from './SegmentGroup';
import styled from 'styled-components';

export const StyledSegment = styled.div<SegmentProps>`
  position: relative;
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  margin: 1rem 0;
  border-radius: 0.28571429rem;
  width: ${({ compact }) => (compact ? 'fit-content' : '100%')};
  padding: ${({ padded }) => (padded ? '3em' : '1em')};

  ${({ stretched }) => stretched && 'height: 100%;'}

  ${({ basic }) =>
    basic &&
    `
    margin: 0;
    border: none !important;
    box-shadow: none;
  `}

  ${({ secondary }) =>
    secondary &&
    `
    background: var(--emphasis-secondary) !important;
  `}

  ${StyledSegmentGroup} & {
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
  }
`;

const Segment: FC<SegmentProps> & SegmentComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledSegment {...rest}>{children}</StyledSegment>;
};

Segment.Group = SegmentGroup;

interface SegmentComponents {
  Group: typeof SegmentGroup;
}

// ======================================================
export interface SegmentProps extends StrictSegmentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSegmentProps {
  /** A basic segment has no special formatting. */
  basic?: boolean;

  /** Additional classes. */
  className?: string;

  /** A segment may take up only as much space as is necessary. */
  compact?: boolean;

  /** A segment can increase its padding. */
  padded?: boolean;

  /** A segment can be formatted to appear noticeable. */
  secondary?: boolean;

  /** A column can stretch its contents to take up the entire parent height. */
  stretched?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Segment;
