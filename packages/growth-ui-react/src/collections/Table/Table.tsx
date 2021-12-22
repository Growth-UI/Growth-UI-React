import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import TableBody from './TableBody';
import TableCell, { StyledTableCell } from './TableCell';
import TableFooter from './TableFoorter';
import TableHead, { StyledTableHead } from './TableHead';
import TableHeadCell, { StyledTableHeadCell } from './TableHeadCell';
import TableRow from './TableRow';
import { FONTSIZES } from '../../types';

export const StyledTable = styled.table<TableProps>`
  margin: 1em 0;
  border: 1px solid var(--border);
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  color: var(--text);

  tr:first-child td {
    border-top: none;
  }

  th,
  td {
    padding: ${({ padded }) => (padded ? '1.5em' : '0.92857143em 0.78571429em')};
  }

  /* Size */
  ${({ size }) =>
    size &&
    `
    font-size: var(--text-${size}) !important;
  `}

  /* Fixed */
  ${({ fixed }) =>
    fixed &&
    `
    table-layout: fixed !important;
  `}

  /* Basic */
  ${({ basic }) =>
    basic &&
    `
    border: none !important;

    th {
      background: transparent;
    }
  `}

  /* Celled */
  ${({ celled, theme, unstackable }) =>
    celled &&
    `
    td:first-child,
    th:first-child {
      border-left: none;
    }

    th, td {
      border-left: 1px solid var(--border);
    }

    ${theme.gui.media.tablet} {
      td, th {
        ${!unstackable && 'border-left: none;'}
      }
    }
  `}
  
  /* Collapsing */
  width: ${({ collapsing }) => (collapsing ? 'auto' : '100%')};

  /* SingleLine */
  ${({ singleLine }) =>
    singleLine &&
    `
    table-layout: fixed !important;

    & ${StyledTableCell} {
      width: 100%;
      min-width: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}

  /* Striped */
  ${({ striped }) =>
    striped &&
    `
    tr:nth-child(2n) {
      background: rgba(0,0,50,.02);
    }
  `}

  ${({ unstackable, theme }) =>
    !unstackable &&
    `${theme.gui.media.tablet} {
    th,
    td {
      display: block !important;
    }

    tr:first-child td {
      border-top: 1px solid var(--border);
    }

    th {
      border-bottom: none;
    }
  }`}

  ${({ definition }) =>
    definition &&
    `
    td:first-child,
    th:first-child {
      border-left: none;
    }

    th, td {
      border-left: 1px solid var(--border);
    }

    & ${StyledTableHead} ${StyledTableHeadCell}:first-child {
      background: transparent !important;
      box-shadow: -1px -1px 0 1px var(--bg);
    }
  `}
`;

const Table: FC<TableProps> & TableComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.HeadCell = TableHeadCell;
Table.Row = TableRow;

// ======================================================
interface TableComponents {
  Body: typeof TableBody;
  Cell: typeof TableCell;
  Footer: typeof TableFooter;
  Head: typeof TableHead;
  HeadCell: typeof TableHeadCell;
  Row: typeof TableRow;
}

// ======================================================
export interface TableProps extends StrictTableProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableProps {
  /** A table can reduce its complexity to increase readability. */
  basic?: boolean;

  /** A table may be divided each row into separate cells. */
  celled?: boolean;

  /** Additional classes. */
  className?: string;

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing?: boolean;

  /** A table may be formatted to emphasize a first column that defines a row content. */
  definition?: boolean;

  /** A table can use fixed a special faster form of table rendering that does not resize table cells based on content. */
  fixed?: boolean;

  /** A table may sometimes need to be more padded for legibility. */
  padded?: boolean;

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine?: boolean;

  /** A table can also be small or large. */
  size?: FONTSIZES;

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A table can specify how it stacks table content responsively. */
  unstackable?: boolean;
}

export default Table;
