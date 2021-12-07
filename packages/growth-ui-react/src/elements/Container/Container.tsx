import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { TEXTALIGNMENTS } from '../../types';

export const StyledContainer = styled.div<ContainerProps>`
  max-width: 100%;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  width: ${({ fluid }) => (fluid ? '100%' : 'fit-content')};

  ${({ padded }) => padded && 'padding: 1em;'}
  ${({ shadow }) => shadow && 'box-shadow: var(--shadow);'}
`;

const Container: FC<ContainerProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

// ======================================================
export interface ContainerProps extends StrictContainerProps {
  [k: string]: any;
}

// ======================================================
export interface StrictContainerProps {
  /** Additional classes. */
  className?: string;

  /** A container can take the width of its container. */
  fluid?: boolean;

  /** A container can increase its padding. */
  padded?: boolean;

  /** A container can show its shadow. */
  shadow?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** Align container text. */
  textAlign?: TEXTALIGNMENTS;
}

export default Container;
