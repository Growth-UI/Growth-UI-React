import React, { FC } from 'react';
import styled from 'styled-components';
import { createShorthandFactory } from '../../lib';

export const StyledSelectMenu = styled.div<SelectMenuProps>`
  position: absolute;
  left: -1px;
  top: calc(100% - 2px);
  width: calc(100% + 2px);
  background: inherit;
  border: 1px solid #96c8da;
  border-bottom-left-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
  border-top: none;
  z-index: 1993;

  ${({ open }) => !open && 'display: none;'}

  ${({ circular, open }) =>
    circular &&
    open &&
    `
    border-bottom-left-radius: 1.5rem !important;
    border-bottom-right-radius: 1.5rem !important;
  `}

  ${({ scrolling }) =>
    scrolling &&
    `
    max-height: 15.42857143rem;
    overflow-x: hidden;
    overflow-y: auto;
  `}
`;

const SelectMenu: FC<SelectMenuProps> & SelectMenuComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledSelectMenu {...rest}>{children}</StyledSelectMenu>;
};

SelectMenu.create = createShorthandFactory(SelectMenu);

interface SelectMenuComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface SelectMenuProps extends StrictSelectMenuProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSelectMenuProps {
  // A select menu can scroll.
  scrolling?: boolean;
}

export default SelectMenu;
