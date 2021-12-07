import React, { CSSProperties, forwardRef } from 'react';
import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../types';

export const StyledAnchor = styled.a<AnchorProps>`
  color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--light-text)')};
  font-size: ${({ fontSize }) => `var(--text-${fontSize || 'sm'})`};
  transition: opacity 0.3s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { children } = props;

  return (
    <StyledAnchor {...props} ref={ref}>
      {children}
    </StyledAnchor>
  );
});

// ======================================================
// prettier-ignore
export interface AnchorProps extends StrictAnchorProps {
  [k: string]: any;
}

// ======================================================
export interface StrictAnchorProps {
  /** Additional classes. */
  className?: string;

  /** The color of the link. */
  color?: COLORS;

  /** A paragraph may appear at different sizes. */
  fontSize?: FONTSIZES;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Anchor;
