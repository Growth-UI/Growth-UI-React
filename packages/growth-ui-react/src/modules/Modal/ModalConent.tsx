import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledModalContent = styled.div<ModalContentProps>`
  padding: 1rem 1rem;
  width: 100%;
  max-height: 60vh;
  overflow-y: auto;
`;

const ModalContent: FC<ModalContentProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledModalContent {...rest}>{children}</StyledModalContent>;
};

// ======================================================
export interface ModalContentProps extends StrictModalContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictModalContentProps {
  /** Additional classes. */
  className?: string;

  /** A modal can use the entire size of the screen. */
  scrolling?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ModalContent;
