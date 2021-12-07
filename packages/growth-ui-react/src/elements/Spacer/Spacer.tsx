import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';

function getHeight({ axis, size }: any) {
  return axis === 'horizontal' ? 0 : size;
}
function getWidth({ axis, size }: any) {
  return axis === 'vertical' ? 0 : size;
}

export const StyledSpacer = styled.span<SpacerProps>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

const Spacer: FC<SpacerProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledSpacer {...rest}>{children}</StyledSpacer>;
};

// ======================================================
export interface SpacerProps extends StrictSpacerProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSpacerProps {
  /** An element type to render. */
  as?: any;

  /** Axis to be spaced. */
  axis?: 'vertical' | 'horizontal';

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** A spacer can be inlined with other elements. */
  inline?: boolean;

  /** The gap between the given direction. */
  size?: number;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Spacer;
