import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledModalDimmer = styled.div<ModalDimmerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dimmed);
  z-index: 1992;
`;

const ModalDimmer: FC<ModalDimmerProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledModalDimmer {...rest}>{children}</StyledModalDimmer>;
};

// ======================================================
export interface ModalDimmerProps extends StrictModalDimmerProps {
  [k: string]: any;
}

// ======================================================
export interface StrictModalDimmerProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ModalDimmer;
