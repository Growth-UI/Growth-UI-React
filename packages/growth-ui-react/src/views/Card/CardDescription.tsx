import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCardDescription = styled.div<CardDescriptionProps>`
  line-height: var(--leading-tight);
`;

const CardDescription: FC<CardDescriptionProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCardDescription {...rest}>{children}</StyledCardDescription>;
};

// ======================================================
export interface CardDescriptionProps extends StrictCardDescriptionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardDescriptionProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default CardDescription;
