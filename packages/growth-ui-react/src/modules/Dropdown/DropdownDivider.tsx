import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledDropdownDivider = styled.div<DropdownDividerProps>`
  border-top: 1px solid var(--border);
  height: 0;
  margin: 0.5em 0;
`;

const DropdownDivider: FC<DropdownDividerProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledDropdownDivider {...rest}>{children}</StyledDropdownDivider>;
};

// ======================================================
export interface DropdownDividerProps extends StrictDropdownDividerProps {
  [k: string]: any;
}

// ======================================================
export interface StrictDropdownDividerProps {
  /** Additional classes. */
  className?: string;
}

export default DropdownDivider;
