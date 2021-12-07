import CommentAction from './CommentAction';
import CommentActions from './CommentActions';
import CommentAuthor from './CommentAuthor';
import CommentAvatar from './CommentAvatar';
import CommentContent from './CommentContent';
import CommentExpander from './CommentExpander';
import CommentGroup, { StyledCommentGroup } from './CommentGroup';
import CommentMetadata from './CommentMetadata';
import CommentText from './CommentText';
import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export const StyledComment = styled.div<CommentProps>`
  padding-bottom: 1.5em;

  & ${StyledCommentGroup} {
    margin: -1.5em 0 -1em 1.25em;
    padding: 3em 0 1em 2.25em;
  }

  ${({ threaded }) =>
    threaded &&
    `
    &:not(:last-of-type) ${StyledCommentGroup} {
      box-shadow: -1px 0 0 rgb(34 36 38 / 15%);
    }
  `}
`;

const Comment: FC<CommentProps> & CommnetComponents = (props) => {
  const { children, ...rest } = props;

  return <StyledComment {...rest}>{children}</StyledComment>;
};

Comment.Action = CommentAction;
Comment.Actions = CommentActions;
Comment.Author = CommentAuthor;
Comment.Avatar = CommentAvatar;
Comment.Content = CommentContent;
Comment.Expander = CommentExpander;
Comment.Group = CommentGroup;
Comment.Metadata = CommentMetadata;
Comment.Text = CommentText;

export interface CommnetComponents {
  Action: typeof CommentAction;
  Actions: typeof CommentActions;
  Author: typeof CommentAuthor;
  Avatar: typeof CommentAvatar;
  Content: typeof CommentContent;
  Expander: typeof CommentExpander;
  Group: typeof CommentGroup;
  Metadata: typeof CommentMetadata;
  Text: typeof CommentText;
}

// ======================================================
export interface CommentProps extends StrictCommentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentProps {
  /** Additional classes. */
  className?: string;

  /** Custom styles. */
  style?: CSSProperties;
}

export default Comment;
