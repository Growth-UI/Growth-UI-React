import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledModalActions = styled.div<ModalActionsProps>`
  padding: 1rem;
  border-top: 1px solid var(--border);
  text-align: right;
`;

const ModalActions: FC<ModalActionsProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledModalActions {...rest}>{children}</StyledModalActions>;
};

// ======================================================
export interface ModalActionsProps extends StrictModalActionsProps {
  [k: string]: any;
}

// ======================================================
export interface StrictModalActionsProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default ModalActions;
