import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentActions = styled.div<CommentActionsProps>`
  display: flex;
  align-items: center;
  font-size: var(--text-sm);
`;

const CommentActions: FC<CommentActionsProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentActions {...rest}>{children}</StyledCommentActions>;
};

// ======================================================
export interface CommentActionsProps extends StrictCommentActionsProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentActionsProps {
  /** Additional classes. */
  className?: string;
}

export default CommentActions;
