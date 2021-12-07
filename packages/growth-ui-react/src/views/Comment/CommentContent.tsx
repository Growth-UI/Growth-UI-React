import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentContent = styled.div<CommentContentProps>``;

const CommentContent: FC<CommentContentProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentContent {...rest}>{children}</StyledCommentContent>;
};

// ======================================================
export interface CommentContentProps extends StrictCommentContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentContentProps {
  /** Additional classes. */
  className?: string;
}

export default CommentContent;
