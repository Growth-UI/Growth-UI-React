import isNil from 'lodash/isNil';
import React, { CSSProperties, FC, MouseEvent } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';
import { cx, useKeyOnly } from '../../lib/classNameBuilders';

export const StyledMenuItem = styled.div<MenuItemProps>`
  position: relative;
  padding: 0.92857143em 1.14285714em;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: var(--border);
  }
`;

const MenuItem: FC<MenuItemProps> = (props) => {
  const { active, children, className, name, onClick, ...rest } = props;
  const classes = cx(useKeyOnly(active, 'active'), className);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick(e, props);
    }
  };

  return (
    <StyledMenuItem {...rest} className={classes} onClick={handleClick}>
      {isNil(children) ? startCase(name) : children}
    </StyledMenuItem>
  );
};

// ======================================================
export interface MenuItemProps extends StrictMenuItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictMenuItemProps {
  /** A menu item can be active. */
  active?: boolean;

  /** Additional classes. */
  className?: string;

  /** Called on click. */
  onClick?: (event: MouseEvent<HTMLDivElement>, data: MenuItemProps) => void;

  /** Custom styles. */
  style?: CSSProperties;
}

export default MenuItem;
