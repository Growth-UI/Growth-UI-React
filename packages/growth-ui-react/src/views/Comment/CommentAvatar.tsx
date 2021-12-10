import Image from '../../elements/Image';
import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledCommentContent } from './CommentContent';

export const StyledCommentAvatar = styled.div<CommentAvatarProps>`
  width: 2.5em;
  height: auto;
  float: left;

  & + ${StyledCommentContent} {
    margin-left: 3.5em;
  }
`;

const CommentAvatar: FC<CommentAvatarProps> = (props) => {
  const { src, ...rest } = props;

  return (
    <StyledCommentAvatar {...rest}>
      <Image circular src={src} />
    </StyledCommentAvatar>
  );
};

// ======================================================
export interface CommentAvatarProps extends StrictCommentAvatarProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentAvatarProps {
  /** Additional classes. */
  className?: string;

  /** Specifies the URL of the image. */
  src: string;
}

export default CommentAvatar;
