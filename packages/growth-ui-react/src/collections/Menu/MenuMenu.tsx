import isNil from 'lodash/isNil';
import React, { FC } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

export const StyledMenuMenu = styled.div<MenuMenuProps>`
  position: relative;
`;

const MenuMenu: FC<MenuMenuProps> = (props) => {
  const { children, content, ...rest } = props;

  return <StyledMenuMenu {...rest}>{isNil(children) ? startCase(content) : children}</StyledMenuMenu>;
};

// ======================================================
export interface MenuMenuProps extends StrictMenuMenuProps {
  [k: string]: any;
}

// ======================================================
export interface StrictMenuMenuProps {
  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: string;

  /** A sub menu can take left or right position. */
  position?: 'left' | 'right';
}

export default MenuMenu;
