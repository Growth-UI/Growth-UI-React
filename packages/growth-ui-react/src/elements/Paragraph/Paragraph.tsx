import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { COLORS, FONTSIZES, LINEHEIGHTS, TEXTALIGNMENTS } from '../../types';

export const StyledParagraph = styled.p<ParagraphProps>`
  ${({ color }) => color && `color: var(--color-${color});`}
  font-size: ${({ fontSize }) => `var(--text-${fontSize || 'base'})`};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  line-height: ${({ lineHeight }) => (lineHeight ? `var(--${lineHeight})` : 'var(--leading-normal)')};
`;

const Paragraph: FC<ParagraphProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};

// ======================================================
export interface ParagraphProps extends StrictParagraphProps {
  [k: string]: any;
}

// ======================================================
export interface StrictParagraphProps {
  /** Additional classes. */
  className?: string;

  /** Color of the paragraph. */
  color?: COLORS;

  /** A paragraph may appear at different sizes. */
  fontSize?: FONTSIZES;

  /** A paragraph may control the leading (line height) of an element. */
  lineHeight?: LINEHEIGHTS;

  /** Custom styles. */
  style?: CSSProperties;

  /** A paragraph can adjust its text alignment. */
  textAlign?: TEXTALIGNMENTS;
}

export default Paragraph;
