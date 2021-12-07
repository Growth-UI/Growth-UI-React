import invoke from 'lodash/invoke';
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createShorthandFactory } from '../../lib';

export const StyledCollapse = styled.div<CollapseProps>`
  position: relative;
  will-change: height, opacity;
  transition: opacity 500ms cubic-bezier(0.65, 0.05, 0.36, 1), height 400ms cubic-bezier(0.65, 0.05, 0.36, 1);
  height: ${({ height }) => height}px;
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  overflow: hidden;
`;

const Collapse: FC<CollapseProps> & CollapseComponents = (props) => {
  const { children, expanded } = props;

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) {
      setHeight(0);
    }

    if (expanded && ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [expanded]);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();

    invoke(props, 'onClick', e, props);
  };

  return (
    <StyledCollapse {...props} height={height} ref={ref} onClick={handleClick}>
      {children}
    </StyledCollapse>
  );
};

Collapse.create = createShorthandFactory(Collapse, (content) => ({ content }));

interface CollapseComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface CollapseProps extends StrictCollapseProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCollapseProps {
  /** Additional classes. */
  className?: string;

  /** If true, the component will transition in. */
  expanded?: boolean;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Collapse;
