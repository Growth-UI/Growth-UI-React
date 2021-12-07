import React, { FC } from 'react';
import styled from 'styled-components';

export const StyledCommentMetadata = styled.div<CommentMetadataProps>`
  display: inline-block;
  margin-left: 0.5em;
  color: var(--light-text);
  font-size: var(--text-sm);
`;

const CommentMetadata: FC<CommentMetadataProps> = (props) => {
  const { children, ...rest } = props;

  return <StyledCommentMetadata {...rest}>{children}</StyledCommentMetadata>;
};

// ======================================================
export interface CommentMetadataProps extends StrictCommentMetadataProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentMetadataProps {
  /** Additional classes. */
  className?: string;
}

export default CommentMetadata;
