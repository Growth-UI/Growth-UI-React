import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { getSpacing } from '../../lib';

export const StyledPadding = styled.div<PaddingProps>`
  padding: ${getSpacing};
  ${({ fluid }) => fluid && 'width: 100%;'}
`;

const Padding: FC<PaddingProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledPadding {...rest}>{children}</StyledPadding>;
};

// ======================================================
export interface PaddingProps extends StrictPaddingProps {
  [k: string]: any;
}

// ======================================================
export interface StrictPaddingProps {
  /** Padding all */
  all?: number;

  /** Padding bottom */
  bottom?: number;

  /** Additional classes. */
  className?: string;

  /** A padding can take the width of its container. */
  fluid?: boolean;

  /** Padding left and right */
  horizontal?: number;

  /** Padding left */
  left?: number;

  /** Padding right */
  right?: number;

  /** Custom styles. */
  style?: CSSProperties;

  /** Padding top */
  top?: number;

  /** Padding top and bottom */
  vertical?: number;
}

export default Padding;
