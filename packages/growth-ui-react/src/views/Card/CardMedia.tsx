import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

export const StyledCardMedia = styled.div<CardMediaProps>`
  padding: 0;
  margin: 0;
  width: 100%;
  display: table;
  border-radius: inherit;

  img {
    display: table-row;
    width: 100%;
    height: auto;
  }
`;

const CardMedia: FC<CardMediaProps> = (props) => {
  const { alt, src, ...rest } = props;

  return (
    <StyledCardMedia {...rest}>
      <img alt={alt} src={src} />
    </StyledCardMedia>
  );
};

// ======================================================
export interface CardMediaProps extends StrictCardMediaProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCardMediaProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default CardMedia;
