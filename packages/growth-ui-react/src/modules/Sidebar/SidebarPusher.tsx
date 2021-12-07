import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledSidebarPusher = styled.div<SidebarPusherProps>`
  position: relative;
  background: var(--bg);
  flex: 1;
  max-height: 100vh;
  overflow: auto;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  ${({ padded }) => padded && 'padding: 1em;'}

  &:before {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    content: '';
    transition: background 300ms ease;
    z-index: 1;
    background: ${({ dimmed }) => (dimmed ? 'var(--dimmed)' : 'transparent')};
    pointer-events: ${({ dimmed }) => (dimmed ? 'auto' : 'none')};
  }
`;

const SidebarPusher: FC<SidebarPusherProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledSidebarPusher {...rest}>{children}</StyledSidebarPusher>;
};

// ======================================================
// prettier-ignore
export interface SidebarPusherProps extends StrictSidebarPusherProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSidebarPusherProps {
  /** Additional classes. */
  className?: string;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;

  /** Pusher can be padded. */
  padded?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default SidebarPusher;
