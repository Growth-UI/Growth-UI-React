import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { numberToWord } from '../../lib';

export const StyledMinHeight = styled.div<MinHeightProps>`
  min-height: ${({ min }) => numberToWord(min)};
`;

const MinHeight: FC<MinHeightProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledMinHeight {...rest}>{children}</StyledMinHeight>;
};

// ======================================================
export interface MinHeightProps extends StrictMinHeightProps {
  [k: string]: any;
}

// ======================================================
export interface StrictMinHeightProps {
  /** Additional classes. */
  className?: string;

  /** Minimum height of the container. */
  min: number | string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default MinHeight;
