import GridCol, { StyledGridCol } from './GridCol';
import GridRow, { StyledGridRow } from './GridRow';
import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { TEXTALIGNMENTS, WIDTHS } from '../../types';

export const StyledGrid = styled.div<GridProps>`
  position: relative;
  width: 100% !important;

  & > ${StyledGridCol} {
    display: inline-flex;
  }

  /* Columns */
  ${({ columns }) =>
    columns &&
    `
    &  > ${StyledGridCol} {
      width: ${100 / columns}%;
    }
  `}

  /* Padded */
  ${({ padded }) => {
    if (padded === 'horizontally') {
      return `
        & > ${StyledGridCol},
        & > ${StyledGridRow} > ${StyledGridCol} {
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
        }
      `;
    }

    if (padded === 'vertically') {
      return `
        & > ${StyledGridCol},
        & > ${StyledGridRow} > ${StyledGridCol} {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
      `;
    }

    if (padded) {
      return `
        & > ${StyledGridCol},
        & > ${StyledGridRow} > ${StyledGridCol} {
          padding: 1rem !important;
        }
      `;
    }
  }}

  /* Relaxed */
  ${({ relaxed }) => {
    if (relaxed === 'horizontally') {
      return `
        & > ${StyledGridCol},
        & > ${StyledGridRow} > ${StyledGridCol} {
          padding-top: 1.5rem !important;
          padding-bottom: 1.5rem !important;
        }
      `;
    }

    if (relaxed === 'vertically') {
      return `
        & > ${StyledGridCol},
        & > ${StyledGridRow} > ${StyledGridCol} {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      `;
    }

    if (relaxed) {
      return `
        & > ${StyledGridCol},
        & > ${StyledGridRow} > ${StyledGridCol} {
          padding: 1.5rem !important;
        }
      `;
    }
  }}

  /* TextAlign */
  text-alignment: ${({ textAlign }) => textAlign || 'left'};
`;

const Grid: FC<GridProps> & GridComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

Grid.Col = GridCol;
Grid.Row = GridRow;

// ======================================================
interface GridComponents {
  Col: typeof GridCol;
  Row: typeof GridRow;
}

// ======================================================
export interface GridProps extends StrictGridProps {
  [k: string]: any;
}

// ======================================================
export interface StrictGridProps {
  /** Additional classes. */
  className?: string;

  /** Represents column count per row in Grid. */
  columns?: WIDTHS;

  /** A grid can preserve spaces cols. */
  padded?: 'horizontally' | 'vertically' | boolean;

  /** A grid can preserve even more space on its cols */
  relaxed?: 'horizontally' | 'vertically' | boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A grid can specify its text alignment. */
  textAlign?: TEXTALIGNMENTS;
}

export default Grid;
