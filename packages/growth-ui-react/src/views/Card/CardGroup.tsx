import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCardGroup = styled.div<CardGroupProps>`
  display: flex;
  flex-wrap: wrap;
`;

const CardGroup: FC<CardGroupProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCardGroup {...rest}>{children}</StyledCardGroup>;
};

// ======================================================
export interface CardGroupProps extends StrictCardGroupProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardGroupProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default CardGroup;
