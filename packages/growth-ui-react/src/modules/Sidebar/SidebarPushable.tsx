import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledSidebarPushable = styled.div<SidebarPushableProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: hidden;
`;

const SidebarPushable: FC<SidebarPushableProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledSidebarPushable {...rest}>{children}</StyledSidebarPushable>;
};

// ======================================================
export interface SidebarPushableProps extends StrictSidebarPushableProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSidebarPushableProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default SidebarPushable;
