import PaginationItem, { PaginationItemProps } from './PaginationItem';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../types';
import { createPaginationItems } from './helpers/createPaginationItems';
import { createShorthandFactory } from '../../lib';

export const StyledPagination = styled.div<PaginationProps>`
  display: flex;
  background: var(--bg) !important;
  width: fit-content;
  align-items: flex-start;
  border-radius: 6px;

  ${({ secondary }) => secondary && 'box-shadow: var(--shadow);'}
`;

const Pagination: FC<PaginationProps> & PaginationComponents = (props) => {
  const {
    activePage = 1,
    boundaryRange = 1,
    circular,
    color,
    disabled,
    hideEllipsis,
    onClick,
    onPageChange,
    secondary,
    showFirstButton = true,
    showLastButton = true,
    siblingRange = 1,
    size = 16,
    totalPages,
    ...rest
  } = props;
  const [page, setPage] = useState(activePage);

  useEffect(() => {
    setPage(activePage);
  }, [activePage]);

  const handleItemClick = (e: MouseEvent<HTMLElement>, itemProps: PaginationItemProps) => {
    if (onClick) {
      onClick(e, itemProps);
    }

    if (page === itemProps.value) {
      return;
    }

    setPage(itemProps.value);

    if (onPageChange) {
      onPageChange(e, { ...itemProps, ...props, activePage: itemProps.value });
    }
  };

  const items = createPaginationItems({
    activePage: page,
    totalPages,
    siblingRange,
    showFirstButton,
    showLastButton,
    boundaryRange,
    hideEllipsis,
  });

  return (
    <StyledPagination {...rest}>
      {items.map((item, index) =>
        PaginationItem.create(
          {
            ...item,
            disabled,
            circular,
            key: index,
            secondary,
            size,
            color,
          },
          {
            overrideProps: {
              onClick: handleItemClick,
            },
          },
        ),
      )}
    </StyledPagination>
  );
};

Pagination.create = createShorthandFactory(Pagination);
Pagination.Item = PaginationItem;

interface PaginationComponents {
  create: ReturnType<typeof createShorthandFactory>;
  Item: typeof PaginationItem;
}

// ======================================================
export interface PaginationProps extends StrictPaginationProps {
  [k: string]: any;
}

// ======================================================
export interface StrictPaginationProps {
  /** Active page. */
  activePage?: number | string;

  /** A pagination can be formatted to show different levels of emphasis. */
  secondary?: boolean;

  /** Number of always visible pages at the beginning and end. */
  boundaryRange?: number | string;

  /** Pagination items can be circular shape. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** The active color. */
  color?: COLORS;

  /** A pagination can be disabled. */
  disabled?: boolean;

  /** Ellipsis can be hidden around the active page. */
  hideEllipsis?: boolean;

  /** Called on change of an active page. */
  onPageChange?: (event: MouseEvent, data: PaginationProps) => void;

  /** If true, show the first-page button. */
  showFirstButton?: boolean;

  /** If true, show the last-page button. */
  showLastButton?: boolean;

  /** Number of always visible pages before and after the current one. */
  siblingRange?: number | string;

  /** The size of the pagination. */
  size?: number;

  /** Total number of pages. */
  totalPages: number | string;
}

export default Pagination;
