import forEach from 'lodash/forEach';
import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS, HORIZONTALALIGNMENTS, ONLY, TEXTALIGNMENTS, VERTICALALIGNMENTS, WIDTHS } from '../../types';

export const StyledGridCol = styled.div<GridColProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  /* Color */
  ${({ color }) =>
    color &&
    `
    background: var(--color-${color});
    color: #fff;
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
  align-items: ${({ horizontalAlign }) => {
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

  /* VerticalAlign */
  justify-content: ${({ verticalAlign }) => {
    switch (verticalAlign) {
      case 'middle':
        return 'center';
      case 'top':
        return 'flex-start';
      case 'bottom':
        return 'flex-end';
      case 'stretch':
        return 'stretch';
      default:
        return 'flex-start';
    }
  }};

  /* Media */
  ${({ computer, laptop, minimobile, mobile, tablet, theme, widescreen }) => {
    let media = '';

    if (minimobile) {
      media += `
        ${theme.gui.media.only.minimobile} {
          width: ${(minimobile / 16) * 100}%;
        }
      `;
    }

    if (mobile) {
      media += `
        ${theme.gui.media.only.mobile} {
          width: ${(mobile / 16) * 100}%;
        }
      `;
    }

    if (tablet) {
      media += `
        ${theme.gui.media.only.tablet} {
          width: ${(tablet / 16) * 100}%;
        }
      `;
    }

    if (computer) {
      media += `
        ${theme.gui.media.only.computer} {
          width: ${(computer / 16) * 100}%;
        }
      `;
    }

    if (laptop) {
      media += `
        ${theme.gui.media.only.laptop} {
          width: ${(laptop / 16) * 100}%;
        }
      `;
    }

    if (widescreen) {
      media += `
        ${theme.gui.media.only.widescreen} {
          width: ${(widescreen / 16) * 100}%;
        }
      `;
    }

    return media;
  }}

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
      let style = 'display: none;';

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

  /* Padded */
  ${({ padded }) =>
    padded &&
    `
    padding: 1.5rem;
  `}

  /* Reversed */
  flex-direction: ${({ reversed }) => (reversed ? 'column-reverse' : 'column')};

  /* TextAlign */
  text-alignment: ${({ textAlign }) => textAlign || 'left'};

  /* Width */
  ${({ width }) =>
    width &&
    `
    width: ${(width / 16) * 100}%;
  `}

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
        return 'nowrap';
    }
  }};
`;

const GridCol: FC<GridColProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledGridCol {...rest}>{children}</StyledGridCol>;
};

// ======================================================
export interface GridColProps extends StrictGridColProps {
  [k: string]: any;
}

// ======================================================
export interface StrictGridColProps {
  /** Additional classes. */
  className?: string;

  /** A grid row or column can be colored. */
  color?: COLORS;

  /** A column can specify a width for a computer. */
  computer?: WIDTHS;

  /** Utilities for controlling how flex items both grow and shrink. */
  flex?: '1' | 'auto' | 'initial' | 'none';

  /** A column can specify its horizontal alignment. */
  horizontalAlign?: HORIZONTALALIGNMENTS;

  /** A column can specify a width for a laptop. */
  laptop?: WIDTHS;

  /** A column can specify a width for a mini mobile. */
  minimobile?: WIDTHS;

  /** A column can specify a width for a mobile. */
  mobile?: WIDTHS;

  /** A column can appear only for specific devices, or screen sizes. */
  only?: ONLY | ONLY[];

  /** A column can increase its padding. */
  padded?: boolean;

  /** A column can specify that its contents should reverse order at different device sizes. */
  reversed?: ONLY | ONLY[] | boolean;

  /** Custom styles. */
  style?: CSSProperties;

  /** A column can specify a width for a tablet. */
  tablet?: WIDTHS;

  /** A column can specify its text alignment. */
  textAlign?: TEXTALIGNMENTS;

  /** A column can specify a width for a wide screen device. */
  widescreen?: WIDTHS;

  /** Represents width of column. */
  width?: WIDTHS;

  /** A column can specify its vertical alignment. */
  verticalAlign?: VERTICALALIGNMENTS;

  /** How flex items wrap. */
  wrap?: 'wrap' | 'reverse' | 'nowrap' | boolean;
}

export default GridCol;
