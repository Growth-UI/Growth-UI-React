import Comment from '@growth-ui/react/views/Comment';
import Icon from '@growth-ui/react/elements/Icon';
import React, { useState } from 'react';

const CommentExampleCollapsed = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onClickExpander = () => setCollapsed(!collapsed);

  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://cdn.fakercloud.com/avatars/larrygerard_128.jpg" />
          <Comment.Content>
            <Comment.Author>Nina</Comment.Author>
            <Comment.Metadata>Today at 1:42PM</Comment.Metadata>
            <Comment.Text>Sparkling water passionfruit</Comment.Text>
            <Comment.Actions>
              <Comment.Action>
                <Icon name="thumbs up" /> 1.6k
              </Comment.Action>
              <Comment.Action>
                <Icon name="thumbs down" /> 10
              </Comment.Action>
            </Comment.Actions>
            <Comment.Expander onClick={onClickExpander}>
              {collapsed ? (
                <Icon name="triangle down" />
              ) : (
                <Icon name="triangle up" />
              )}
              View 2 replies
            </Comment.Expander>
          </Comment.Content>
          <Comment.Group collapsed={collapsed}>
            <Comment>
              <Comment.Avatar src="https://cdn.fakercloud.com/avatars/olaolusoga_128.jpg" />
              <Comment.Content>
                <Comment.Author>Jarred</Comment.Author>
                <Comment.Metadata>Today at 2:01PM</Comment.Metadata>
                <Comment.Text>innocent! 12fl oz (355ml)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>
                    <Icon name="thumbs up" /> 317
                  </Comment.Action>
                  <Comment.Action>
                    <Icon name="thumbs down" /> 50
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src="https://cdn.fakercloud.com/avatars/kiwiupover_128.jpg" />
              <Comment.Content>
                <Comment.Author>Dina</Comment.Author>
                <Comment.Metadata>Today at 5:12PM</Comment.Metadata>
                <Comment.Text>Good morning!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>
                    <Icon name="thumbs up" /> 3.2k
                  </Comment.Action>
                  <Comment.Action>
                    <Icon name="thumbs down" /> 0
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://cdn.fakercloud.com/avatars/commadelimited_128.jpg" />
          <Comment.Content>
            <Comment.Author>Leopord</Comment.Author>
            <Comment.Metadata>Today at 1:45PM</Comment.Metadata>
            <Comment.Text>Naturally essenced!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>
                <Icon name="thumbs up" /> 0
              </Comment.Action>
              <Comment.Action>
                <Icon name="thumbs down" /> 0
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="https://cdn.fakercloud.com/avatars/michaelcolenso_128.jpg" />
              <Comment.Content>
                <Comment.Author>Marshall</Comment.Author>
                <Comment.Metadata>Today at 2:01PM</Comment.Metadata>
                <Comment.Text>innocent! 12fl oz (355ml)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>
                    <Icon name="thumbs up" /> 113
                  </Comment.Action>
                  <Comment.Action>
                    <Icon name="thumbs down" /> 12
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://cdn.fakercloud.com/avatars/vikasvinfotech_128.jpg" />
          <Comment.Content>
            <Comment.Author>Amanda</Comment.Author>
            <Comment.Metadata>Today at 2:00PM</Comment.Metadata>
            <Comment.Text>Fly me to the moon</Comment.Text>
            <Comment.Actions>
              <Comment.Action>
                <Icon name="thumbs up" /> 10
              </Comment.Action>
              <Comment.Action>
                <Icon name="thumbs down" /> 2
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default CommentExampleCollapsed;
