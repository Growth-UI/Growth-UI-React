import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCardHeader = styled.div<CardHeaderProps>`
  font-weight: 700;
  font-size: var(--text-lg);
`;

const CardHeader: FC<CardHeaderProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCardHeader {...rest}>{children}</StyledCardHeader>;
};

// ======================================================
export interface CardHeaderProps extends StrictCardHeaderProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardHeaderProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default CardHeader;
