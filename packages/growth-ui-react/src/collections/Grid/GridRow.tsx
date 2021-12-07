import forEach from 'lodash/forEach';
import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS, HORIZONTALALIGNMENTS, ONLY, TEXTALIGNMENTS, VERTICALALIGNMENTS, WIDTHS } from '../../types';
import { StyledGridCol } from './GridCol';

export const StyledGridRow = styled.div<GridRowProps>`
  position: relative;
  display: flex;
  width: 100% !important;

  /* Color */
  ${({ color }) =>
    color &&
    `
    background: var(--color-${color});
    color: #fff;
  `}

  /* Columns */
  ${({ columns }) =>
    columns &&
    `
    &  > ${StyledGridCol} {
      width: ${100 / columns}%;
    }
  `}
  
  /* Flex */
  flex: ${({ flex }) => {
    switch (flex) {
      case '1':
        return '1 1 0%';
      case 'auto':
        return '1 1 auto';
      case 'initial':
        return '0 1 auto';
      case 'none':
        return 'none';
      default:
        return 'none';
    }
  }};

  /* HorizontalAlign */
  justify-content: ${({ horizontalAlign }) => {
    switch (horizontalAlign) {
      case 'center':
        return 'center';
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'stretch':
        return 'stretch';
      case 'space-around':
        return 'space-around';
      case 'space-between':
        return 'space-between';
      case 'space-evenly':
        return 'space-evenly';
      default:
        return 'flex-start';
    }
  }};

  /* Only */
  ${({ only, theme }) => {
    if (typeof only === 'string') {
      return `
        display: none;

        ${theme.gui.media.only[only]} {
          display: flex;
        }
      `;
    }

    if (Array.isArray(only)) {
      let style = 'display: none;';

      forEach(only, (o) => {
        style += `
          ${theme.gui.media.only[o]} {
            display: flex;
          }
        `;
      });

      return style;
    }
  }}

  /* Reversed */
  ${({ reversed, theme }) => {
    if (typeof reversed === 'string') {
      return `
        flex-direction: row;

        ${theme.gui.media.only[reversed]} {
          flex-direction: row-reverse;
        }
      `;
    }

    if (Array.isArray(reversed)) {
      let style = 'flex-direction: row;';

      forEach(reversed, (o) => {
        style += `
          ${theme.gui.media.only[o]} {
            flex-direction: row-reverse;
          }
        `;
      });

      return style;
    }

    if (typeof reversed === 'boolean') {
      return 'flex-direction: row-reverse;';
    }

    return 'flex-direction: row;';
  }}

  /* Stretched */
  ${({ stretched }) =>
    stretched &&
    `
    & > ${StyledGridCol} > * {
      flex-grow: 1;
    }
  `}

  /* TextAlign */
  text-alignment: ${({ textAlign }) => textAlign || 'left'};

  /* VerticalAlign */
  align-items: ${({ verticalAlign }) => {
    switch (verticalAlign) {
      case 'baseline':
        return 'baseline';
      case 'bottom':
        return 'flex-end';
      case 'middle':
        return 'center';
      case 'top':
        return 'flex-start';
      default:
        return 'stretch';
    }
  }};

  /* Wrap */
  flex-wrap: ${({ wrap }) => {
    switch (wrap) {
      case 'nowrap':
        return 'nowrap';
      case 'reverse':
        return 'wrap-reverse';
      case 'wrap':
        return 'wrap';
      case true:
        return 'wrap';
      default:
        return 'wrap';
    }
  }};
`;

const GridRow: FC<GridRowProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledGridRow {...rest}>{children}</StyledGridRow>;
};

// ======================================================
export interface GridRowProps extends StrictGridRowProps {
  [k: string]: any;
}

// ======================================================
export interface StrictGridRowProps {
  /** Additional classes. */
  className?: string;

  /** A grid row or column can be colored. */
  color?: COLORS;

  /** Represents column count per line in Row. */
  columns?: WIDTHS;

  /** Utilities for controlling how flex items both grow and shrink. */
  flex?: '1' | 'auto' | 'initial' | 'none';

  /** A row can have its columns aligned horizontally. */
  horizontalAlign?: HORIZONTALALIGNMENTS;

  /** A row can appear only for specific devices, or screen sizes. */
  only?: ONLY | ONLY[];

  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed?: ONLY | ONLY[] | boolean;

  /** A row can stretch its contents to take up the entire column height. */
  stretched?: boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A row can specify its text alignment. */
  textAlign?: TEXTALIGNMENTS;

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: VERTICALALIGNMENTS;

  /** How flex items wrap. */
  wrap?: 'wrap' | 'reverse' | 'nowrap' | boolean;
}

export default GridRow;
