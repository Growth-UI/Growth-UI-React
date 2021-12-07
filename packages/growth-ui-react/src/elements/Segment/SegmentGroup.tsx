import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledSegmentGroup = styled.div<SegmentGroupProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  width: ${({ compact }) => (compact ? 'fit-content' : '100%')};
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  border: 1px solid var(--border);

  ${({ horizontal }) => {
    if (horizontal) {
      return `
        & > *:not(:first-child) {
          border-left: 1px solid var(--border) !important;
        }
      `;
    }

    return `
      & > *:not(:first-child) {
        border-top: 1px solid var(--border) !important;
      }
    `;
  }}

  ${({ basic }) =>
    basic &&
    `
    border-radius: 0;
    border: none;
    box-shadow: none;

    & > *:not(:first-child) {
      border-left: none !important;
      border-top: none !important;
    }
  `}
`;

const SegmentGroup: FC<SegmentGroupProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledSegmentGroup {...rest}>{children}</StyledSegmentGroup>;
};

// ======================================================
export interface SegmentGroupProps extends StrictSegmentGroupProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSegmentGroupProps {
  /** A basic segment has no special formatting. */
  basic?: boolean;

  /** Additional classes. */
  className?: string;

  /** A segment may take up only as much space as is necessary. */
  compact?: boolean;

  /** Formats content to be aligned horizontally. */
  horizontal?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default SegmentGroup;
