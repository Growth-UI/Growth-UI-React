import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentExpander = styled.div<CommentExpanderProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-primary);
  font-size: var(--text-sm);
  margin-top: 0.75rem;
  margin-left: -0.3em;
  transition: all 0.2s ease-out;

  & > svg {
    color: var(--color-primary);
    width: 23px;
    height: auto;
  }
`;

const CommentExpander: FC<CommentExpanderProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentExpander {...rest}>{children}</StyledCommentExpander>;
};

// ======================================================
export interface CommentExpanderProps extends StrictCommentExpanderProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentExpanderProps {
  /** Additional classes. */
  className?: string;
}

export default CommentExpander;
