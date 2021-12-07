import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledDropdownText = styled.div<DropdownTextProps>`
  display: inline-block;
  vertical-align: middle;
`;

const DropdownText: FC<DropdownTextProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledDropdownText {...rest}>{children}</StyledDropdownText>;
};

// ======================================================
export interface DropdownTextProps extends StrictDropdownTextProps {
  [k: string]: any;
}

// ======================================================
export interface StrictDropdownTextProps {
  /** Additional classes. */
  className?: string;
}

export default DropdownText;
