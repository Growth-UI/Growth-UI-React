import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledHeadingContent = styled.div<HeadingContentProps>`
  font-size: 65%;
  font-weight: 400;
  padding: 0;
  margin: 10px 0 0 0;
  line-height: 1.2em;
`;

const HeadingContent: FC<HeadingContentProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledHeadingContent {...rest}>{children}</StyledHeadingContent>;
};

// ======================================================
// prettier-ignore
export interface HeadingContentProps extends StrictHeadingContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictHeadingContentProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default HeadingContent;
