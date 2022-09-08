import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';
import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledDropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  display: ${({ open }) => (open ? 'block !important' : 'none !important')};
  border-radius: 0.28571429rem;
  box-shadow: var(--shadow);
  background: var(--bg);
  top: 100%;
  min-width: max-content;
  text-align: left;
  z-index: 1993;

  /* Direction */
  ${({ direction }) => {
    switch (direction) {
      case 'left':
        return 'left: 0;';
      case 'right':
        return 'right: 0;';
      default:
        return `
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  /* Scrolling */
  ${({ scrolling }) => {
    if (isBoolean(scrolling) && scrolling) {
      return `
        max-height: 20.57142857rem;
        overflow-y: auto;
      `;
    }

    if (isNumber(scrolling)) {
      return `
        max-height: ${scrolling}px;
        overflow-y: auto;
      `;
    }
  }}
`;

const DropdownMenu: FC<DropdownMenuProps> = (props) => {
  const { children, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledDropdownMenu onClick={handleClick} {...rest}>
      {children}
    </StyledDropdownMenu>
  );
};

// ======================================================
export interface DropdownMenuProps extends StrictDropdownMenuProps {
  [k: string]: any;
}

// ======================================================
export interface StrictDropdownMenuProps {
  /** Additional classes. */
  className?: string;

  /** A dropdown menu can open to the left or to the right. */
  direction?: 'left' | 'center' | 'right';

  /** Whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** A dropdown can have its menu scroll. */
  scrolling?: boolean | number;
}

export default DropdownMenu;
