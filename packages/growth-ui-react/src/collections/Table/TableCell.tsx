import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { StyledTableFooter } from './TableFoorter';
import { TEXTALIGNMENTS } from '../../types';

export const StyledTableCell = styled.td<TableCellProps>`
  border-top: 1px solid var(--border);

  ${StyledTableFooter} & {
    border-top: 1px solid var(--border) !important;
  }

  text-align: ${({ textAlign }) => textAlign || 'left'};

  ${({ negative, positive, theme, warning }) => {
    if (negative) {
      return `
        background: ${theme.gui.color.negative.background} !important;
        color: ${theme.gui.color.negative.color} !important;
      `;
    }

    if (positive) {
      return `
        background: ${theme.gui.color.positive.background} !important;
        color: ${theme.gui.color.positive.color} !important;
      `;
    }

    if (warning) {
      return `
        background: ${theme.gui.color.warning.background} !important;
        color: ${theme.gui.color.warning.color} !important;
      `;
    }
  }}
`;

const TableCell: FC<TableCellProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledTableCell {...rest}>{children}</StyledTableCell>;
};

// ======================================================
export interface TableCellProps extends StrictTableCellProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableCellProps {
  /** Additional classes. */
  className?: string;

  /** A row may let a user know whether a value is bad. */
  negative?: boolean;

  /** A row may let a user know whether a value is good. */
  positive?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A table row can adjust its text alignment. */
  textAlign?: TEXTALIGNMENTS;

  /** A row may warn. */
  warning?: boolean;
}

export default TableCell;
