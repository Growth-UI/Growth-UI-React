import React, { Children, cloneElement, FC, isValidElement, ReactNode } from 'react';
import styled from 'styled-components';

export const StyledCommentGroup = styled.div<CommentGroupProps>`
  ${({ collapsed }) =>
    collapsed &&
    `
    display: none;
  `}
`;

const CommentGroup: FC<CommentGroupProps> = (props) => {
  const { children, threaded, ...rest } = props;

  const commentElements = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { threaded });
    }

    return child;
  });

  return <StyledCommentGroup {...rest}>{commentElements}</StyledCommentGroup>;
};

// ======================================================
export interface CommentGroupProps extends StrictCommentGroupProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentGroupProps {
  /** Primary content. */
  children?: ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comments can be collapsed, or hidden from view. */
  collapsed?: boolean;

  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded?: boolean;
}

export default CommentGroup;
