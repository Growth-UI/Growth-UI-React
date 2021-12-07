import styled from 'styled-components';
import { CSSProperties } from 'react';
import { getSpacing } from '../../lib';

export const StyledMargin = styled.div<MarginProps>`
  margin: ${getSpacing};
  ${({ fluid }) => fluid && 'width: 100%;'}
`;

// ======================================================
export interface MarginProps extends StrictMarginProps {
  [k: string]: any;
}

// ======================================================
export interface StrictMarginProps {
  /** Margin all */
  all?: number;

  /** Margin bottom */
  bottom?: number;

  /** Additional classes. */
  className?: string;

  /** A margin can take the width of its container. */
  fluid?: boolean;

  /** Margin left and right */
  horizontal?: number;

  /** Margin left */
  left?: number;

  /** Margin right */
  right?: number;

  /** Custom styles. */
  style?: CSSProperties;

  /** Margin top */
  top?: number;

  /** Margin top and bottom */
  vertical?: number;
}
