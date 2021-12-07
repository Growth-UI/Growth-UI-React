import Comment from '@growth-ui/react/views/Comment';
import faker from 'faker';
import React from 'react';

const CommentExampleComment = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src={faker.image.avatar()} />
      <Comment.Content>
        <Comment.Author>{faker.name.firstName()}</Comment.Author>
        <Comment.Metadata>Today at 1:42PM</Comment.Metadata>
        <Comment.Text>Sparkling water passionfruit</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={faker.image.avatar()} />
      <Comment.Content>
        <Comment.Author>{faker.name.firstName()}</Comment.Author>
        <Comment.Metadata>Today at 1:45PM</Comment.Metadata>
        <Comment.Text>Naturally essenced!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={faker.image.avatar()} />
          <Comment.Content>
            <Comment.Author>{faker.name.firstName()}</Comment.Author>
            <Comment.Metadata>Today at 2:01PM</Comment.Metadata>
            <Comment.Text>innocent! 12fl oz (355ml)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src={faker.image.avatar()} />
      <Comment.Content>
        <Comment.Author>{faker.name.firstName()}</Comment.Author>
        <Comment.Metadata>Today at 2:00PM</Comment.Metadata>
        <Comment.Text>Fly me to the moon</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default CommentExampleComment;
