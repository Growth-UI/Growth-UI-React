import Icon from '@growth-ui/react/elements/Icon';
import Navbar from '../components/Navbar';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import Sidebar from '@growth-ui/react/modules/Sidebar';
import Spacer from '@growth-ui/react/elements/Spacer';
import useWindowResize from 'docs/hooks/useWindowSize';
import VerticalSidebar from '../components/VerticalSidebar';
import { version } from '@growth-ui/react/../package.json';

const Layout: FC = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [isBreakPoint, setIsBreakPoint] = useState(false);
  const { width } = useWindowResize();

  useEffect(() => {
    if (width < 700) {
      setIsBreakPoint(true);
    } else {
      setIsBreakPoint(false);
    }
  }, [width]);

  const handleOpen = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();

    setVisible(true);
  };

  const handleClickOutsideSidebar = () => {
    if (isBreakPoint && visible) setVisible(false);
  };

  return (
    <Sidebar.Pushable>
      <VerticalSidebar
        version={version}
        visible={!isBreakPoint || visible}
        animation={isBreakPoint ? 'overlay' : 'push'}
      />
      <Sidebar.Pusher
        dimmed={isBreakPoint && visible}
        onClick={handleClickOutsideSidebar}
      >
        <Navbar>
          {isBreakPoint && (
            <Icon name="menu" cursor="pointer" onClick={handleOpen} />
          )}
        </Navbar>
        <Spacer size={15} />
        {children}
        <Spacer size={100} />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;
