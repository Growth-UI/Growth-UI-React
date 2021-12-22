import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { StyledTableFooter } from './TableFoorter';
import { TEXTALIGNMENTS } from '../../types';

export const StyledTableHeadCell = styled.th<TableHeadCellProps>`
  background: var(--emphasis-secondary);
  border-bottom: 1px solid var(--border);
  text-align: ${({ textAlign }) => textAlign || 'left'};
  background: var(--active-bg);

  ${StyledTableFooter} & {
    border-top: 1px solid var(--border) !important;
  }
`;

const TableHeadCell: FC<TableHeadCellProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledTableHeadCell {...rest}>{children}</StyledTableHeadCell>;
};

// ======================================================
export interface TableHeadCellProps extends StrictTableHeadCellProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableHeadCellProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;

  /** A table row can adjust its text alignment. */
  textAlign?: TEXTALIGNMENTS;
}

export default TableHeadCell;
