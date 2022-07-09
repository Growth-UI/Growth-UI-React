import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../lib/GUI';
import { COLORS as TCOLORS, FONTSIZES, LINEHEIGHTS, TEXTALIGNMENTS } from '../../types';
import { createShorthandFactory } from '../../lib';
import { includes } from 'lodash';

export const StyledParagraph = styled.p<ParagraphProps>`
  color: ${({ color }) => {
    if (includes(COLORS, color)) return `var(--color-${color})`;
    return color;
  }};
  font-size: ${({ fontSize }) => {
    if (typeof fontSize === 'number') return `${fontSize}px`;
    return `var(--text-${fontSize || 'base'})`;
  }};
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  line-height: ${({ lineHeight }) => (lineHeight ? `var(--${lineHeight})` : 'var(--leading-normal)')};
`;

const Paragraph: FC<ParagraphProps> & ParagraphComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};

Paragraph.create = createShorthandFactory(Paragraph);

interface ParagraphComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

// ======================================================
export interface ParagraphProps extends StrictParagraphProps {
  [k: string]: any;
}

// ======================================================
export interface StrictParagraphProps {
  /** Additional classes. */
  className?: string;

  /** Color of the paragraph. */
  color?: TCOLORS | string;

  /** A paragraph may appear at different sizes. */
  fontSize?: FONTSIZES | number;

  /** A paragraph may appear at different thickness. */
  fontWeight?: number;

  /** A paragraph may control the leading (line height) of an element. */
  lineHeight?: LINEHEIGHTS;

  /** Custom styles. */
  style?: CSSProperties;

  /** A paragraph can adjust its text alignment. */
  textAlign?: TEXTALIGNMENTS;
}

export default Paragraph;
