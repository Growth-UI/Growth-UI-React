import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import SidebarPushable from './SidebarPushable';
import SidebarPusher, { StyledSidebarPusher } from './SidebarPusher';
import styled from 'styled-components';

const getDimension = ({
  animation = 'push',
  direction = 'left',
  visible,
  childrenWidth,
  childrenHeight,
}: SidebarProps) => {
  if (animation === 'push' && !visible && (direction === 'top' || direction === 'bottom')) {
    return `
      width: 100%;
      height: 0px;

      & ~ ${StyledSidebarPusher} {
        width: 100%;
        flex: none;
      }
    `;
  }

  if (direction === 'top' || direction === 'bottom') {
    return `
      width: 100%;
      height: ${childrenHeight}px;

      & ~ ${StyledSidebarPusher} {
        width: 100%;
        flex: none;
      }
    `;
  }

  if (!visible && animation === 'push') {
    return 'width: 0px;';
  }

  if (visible && animation === 'push') {
    return `width: ${childrenWidth}px;`;
  }

  if (animation === 'overlay') {
    return 'height: 100%;';
  }
};

const getOrder = ({ direction = 'left' }: SidebarProps) => {
  if (direction === 'right' || direction === 'bottom') {
    return 'order: 2;';
  }
};

const getPosition = ({ direction = 'left' }: SidebarProps) => {
  if (direction === 'bottom') {
    return 'bottom: 0;';
  }

  if (direction === 'right') {
    return 'right: 0;';
  }

  if (direction === 'top') {
    return 'top: 0;';
  }

  return 'left: 0;';
};

const getOverlayTransitionEffect = ({ animation = 'push', direction = 'left', visible }: SidebarProps) => {
  if (animation !== 'overlay') return '';

  if (!visible && direction === 'bottom') {
    return 'transform: translateY(110%);';
  }

  if (visible && direction === 'bottom') {
    return 'transform: translateY(0%);';
  }

  if (!visible && direction === 'top') {
    return 'transform: translateY(-110%);';
  }

  if (visible && direction === 'top') {
    return 'transform: translateY(0);';
  }

  if (visible && direction === 'right') {
    return 'transform: translateX(0);';
  }

  if (!visible && direction === 'right') {
    return 'transform: translateX(110%);';
  }

  if (!visible && direction === 'left') {
    return 'transform: translateX(-110%);';
  }

  if (visible && direction === 'left') {
    return 'transform: translateX(0);';
  }
};

export const StyledSidebar = styled.div<SidebarProps>`
  position: relative;
  box-shadow: 0 0 5px var(--border);
  background: var(--bg);
  transition-property: transform, width, height;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  max-height: 100vh;
  overflow-y: auto;
  z-index: 1992;

  & > div {
    min-width: max-content;
  }

  ${({ animation }) => animation === 'overlay' && 'position: absolute;'}
  ${getDimension}
  ${getOrder}
  ${getPosition}
  ${getOverlayTransitionEffect}
`;

const Sidebar: FC<SidebarProps> & SidebarComponents = (props) => {
  const { children, ...rest } = props;
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(ref.current?.getBoundingClientRect().width);
    setHeight(ref.current?.getBoundingClientRect().height);
  }, []);

  return (
    <StyledSidebar {...rest} childrenWidth={width} childrenHeight={height}>
      <div ref={ref}>{children}</div>
    </StyledSidebar>
  );
};

Sidebar.Pushable = SidebarPushable;
Sidebar.Pusher = SidebarPusher;

// ======================================================
interface SidebarComponents extends StrictSidebarProps {
  Pushable: typeof SidebarPushable;
  Pusher: typeof SidebarPusher;
}

// ======================================================
export interface SidebarProps extends StrictSidebarProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSidebarProps {
  /** Animation style. */
  animation?: 'overlay' | 'push';

  /** Additional classes. */
  className?: string;

  /** Direction the sidebar should appear on. */
  direction?: 'top' | 'right' | 'bottom' | 'left';

  /** Custom styles. */
  style?: CSSProperties;

  /** Controls whether or not the sidebar is visible on the page. */
  visible?: boolean;
}

export default Sidebar;
