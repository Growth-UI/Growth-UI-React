import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { createShorthand } from '../../lib';

export const StyledModalHeader = styled.div<ModalHeaderProps>`
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  font-size: 1.42857143rem;
  line-height: 1.28571429em;
  font-weight: 700;

  & > span {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.6;
  }
`;

const ModalHeader: FC<ModalHeaderProps> = (props) => {
  const { children, subheader, ...rest } = props;

  const subheaderElement = createShorthand('span', subheader);

  return (
    <StyledModalHeader {...rest}>
      {children}
      {subheaderElement}
    </StyledModalHeader>
  );
};

// ======================================================
export interface ModalHeaderProps extends StrictModalHeaderProps {
  [k: string]: any;
}

// ======================================================
export interface StrictModalHeaderProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;

  /** Headers may contain subheaders. */
  subheader?: string;
}

export default ModalHeader;
