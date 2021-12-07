import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentAuthor = styled.div<CommentAuthorProps>`
  display: inline-block;
  font-weight: 700;

  & > a {
    transition: color 0.2s ease-out;
    cursor: pointer;
    text-decoration: none;
  }

  & > a:hover {
    color: var(--primary);
  }
`;

const CommentAuthor: FC<CommentAuthorProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentAuthor {...rest}>{children}</StyledCommentAuthor>;
};

// ======================================================
export interface CommentAuthorProps extends StrictCommentAuthorProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentAuthorProps {
  /** Additional classes. */
  className?: string;
}

export default CommentAuthor;
