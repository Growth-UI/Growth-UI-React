import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCardContent = styled.div<CardContentProps>`
  padding: 16px;
  color: var(--text);
  width: 100%;

  ${({ extra }) =>
    extra &&
    `
    flex-direction: row;
    border-top: 1px solid var(--border);
    padding: 8px;
    margin-top: auto;
  `}
`;

const CardContent: FC<CardContentProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCardContent {...rest}>{children}</StyledCardContent>;
};

// ======================================================
export interface CardContentProps extends StrictCardContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardContentProps {
  /** Additional classes. */
  className?: string;

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra?: boolean;

  /** A content can be formatted to have its children appear horizontally. */
  horizontal?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default CardContent;
