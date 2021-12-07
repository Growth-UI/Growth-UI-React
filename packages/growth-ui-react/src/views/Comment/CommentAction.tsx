import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentAction = styled.div<CommentActionProps>`
  display: inline-flex;
  color: var(--light-text);
  cursor: pointer;
  margin-right: 0.75em;
  transition: color 0.2s ease-out;
  align-items: center;

  & > svg {
    width: 15px;
    height: auto;
    margin-right: 4px;
  }

  &:hover {
    color: var(--text);
  }
`;

const CommentAction: FC<CommentActionProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentAction {...rest}>{children}</StyledCommentAction>;
};

// ======================================================
export interface CommentActionProps extends StrictCommentActionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentActionProps {
  /** Additional classes. */
  className?: string;
}

export default CommentAction;
