import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentText = styled.div<CommentTextProps>`
  margin: 0.25em 0 0.5em;
  word-wrap: break-word;
  line-height: var(--leading-tight);
  font-size: var(--text-base);
`;

const CommentText: FC<CommentTextProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentText {...rest}>{children}</StyledCommentText>;
};

// ======================================================
export interface CommentTextProps extends StrictCommentTextProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentTextProps {
  /** Additional classes. */
  className?: string;
}

export default CommentText;
