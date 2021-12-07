import HeadingContent, { StyledHeadingContent } from './HeadingContent';
import React, { CSSProperties, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { COLORS, TEXTALIGNMENTS } from '../../types';
import { StyledImage } from '../Image';

export const StyledHeading = styled.h1<HeadingProps>`
  border: none;
  margin: 0 0 10px 0;
  padding: 0 0;
  font-weight: 700;
  width: 100%;
  line-height: 1.28571429em;
  text-transform: none;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  ${({ color }) => color && `color: var(--color-${color});`}

  & > svg {
    display: inline-block;
    padding-top: 0;
    width: 40px;
    height: auto;
    vertical-align: middle;
  }

  & > ${StyledImage} {
    display: inline-block;
    vertical-align: middle;
  }

  & > svg + ${StyledHeadingContent}, & > ${StyledImage} + ${StyledHeadingContent} {
    margin: 0;
    padding-left: 0.75rem;
    display: inline-block;
    font-weight: 700;
    font-size: 100%;
    vertical-align: middle;
  }
`;

const Heading: FC<HeadingProps> & HeadingComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

Heading.Content = HeadingContent;

// ======================================================
interface HeadingComponents {
  Content: typeof HeadingContent;
}

// ======================================================
export interface HeadingProps extends StrictHeadingProps {
  [k: string]: any;
}

// ======================================================
export interface StrictHeadingProps {
  /** An element type to render as. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a';

  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Color of the heading. */
  color?: COLORS;

  /** Custom styles. */
  style?: CSSProperties;

  /** A heading can adjust its text alignment. */
  textAlign?: TEXTALIGNMENTS;
}

export default Heading;
