import Button, { StyledButton } from '../../elements/Button';
import invoke from 'lodash/invoke';
import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { createShorthandFactory } from '../../lib';

export const StyledPaginationItem = styled.div<PaginationItemProps>`
  ${StyledButton} {
    padding: 0;
    background: var(--bg) !important;
    color: var(--text) !important;
    width: ${({ size }) => size * 2.2}px;
    height: ${({ size }) => size * 2.2}px;
    font-size: ${({ size }) => size}px;

    ${({ active }) =>
      active &&
      `
      background: var(--active-bg) !important;
    `}

    ${({ active, color }) =>
      active &&
      color &&
      `
      background: var(--color-${color}) !important;
      color: #fff !important;
    `}

    ${({ circular }) =>
      circular &&
      `
      border-radius: 500rem !important;
    `}

    ${({ type }) =>
      type === 'ellipsisItem' &&
      `
      cursor: default;
      pointer-events: none;
    `}

    svg {
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
      margin: 0;
    }
  }

  ${StyledButton}:hover {
    ${({ active }) => !active && 'background: var(--bg-hover) !important;'}
  }

  ${({ secondary }) =>
    secondary &&
    `
    ${StyledButton} {
      border: 1px solid var(--border) !important;
      border-radius: 0;
    }

    &:not(:first-child) > ${StyledButton} {
      border-left: none !important;
    }
  `}
`;

const PaginationItem: FC<PaginationItemProps> & PaginationItemComponents = (props) => {
  const { active, circular, color, content, disabled, secondary, size, type, value } = props;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    invoke(props, 'onClick', e, { ...props });
  };

  return (
    <StyledPaginationItem
      active={active}
      circular={circular}
      color={color}
      secondary={secondary}
      size={size}
      type={type}
    >
      <Button basic borderless active={active} disabled={disabled} onClick={handleClick}>
        {content || value}
      </Button>
    </StyledPaginationItem>
  );
};

PaginationItem.create = createShorthandFactory(PaginationItem);

interface PaginationItemComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface PaginationItemProps extends StrictPaginationItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictPaginationItemProps {
  /** A pagination item can be active. */
  active?: boolean;

  /** A pagination item can be disabled. */
  disabled?: boolean;

  /** Additional classes. */
  className?: string;

  /** Called on click. */
  onClick?: (event: MouseEvent, data: PaginationItemProps) => void;
}

export default PaginationItem;
