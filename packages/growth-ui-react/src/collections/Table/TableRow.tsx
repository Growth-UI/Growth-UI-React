import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { StyledTableCell } from './TableCell';
import { TEXTALIGNMENTS } from '../../types';

export const StyledTableRow = styled.tr<TableRowProps>`
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

  ${({ textAlign }) =>
    textAlign &&
    `
    & ${StyledTableCell} {
      text-align: ${textAlign};
    }
  `}
`;

const TableRow: FC<TableRowProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledTableRow {...rest}>{children}</StyledTableRow>;
};

// ======================================================
export interface TableRowProps extends StrictTableRowProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTableRowProps {
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

export default TableRow;
