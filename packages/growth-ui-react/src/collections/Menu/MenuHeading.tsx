import isNil from 'lodash/isNil';
import React, { FC } from 'react';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

export const StyledMenuHeading = styled.div<MenuHeadingProps>`
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  cursor: default;
`;

const MenuHeading: FC<MenuHeadingProps> = (props) => {
  const { children, content, ...rest } = props;
  return <StyledMenuHeading {...rest}>{isNil(children) ? startCase(content) : children}</StyledMenuHeading>;
};

// ======================================================
export interface MenuHeadingProps extends StrictMenuHeadingProps {
  [k: string]: any;
}

// ======================================================
export interface StrictMenuHeadingProps {
  as?: keyof JSX.IntrinsicElements;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: string;
}

export default MenuHeading;
