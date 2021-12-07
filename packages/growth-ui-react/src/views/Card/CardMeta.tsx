import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCardMeta = styled.div<CardMetaProps>`
  font-size: var(--text-sm);
  color: var(--light-text);
`;

const CardMeta: FC<CardMetaProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCardMeta {...rest}>{children}</StyledCardMeta>;
};

// ======================================================
export interface CardMetaProps extends StrictCardMetaProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardMetaProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default CardMeta;
