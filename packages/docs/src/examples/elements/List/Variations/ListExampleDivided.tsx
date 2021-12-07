import List from '@growth-ui/react/elements/List';
import Icon from '@growth-ui/react/elements/Icon';
import React from 'react';

const ListExampleDivided = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <Icon name="github" />
      <List.Content>
        <List.Heading>kyuhakyuk/Growth-UI-React</List.Heading>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="github" />
      <List.Content>
        <List.Heading>kyuhakyuk/kyuhakyuk</List.Heading>
        <List.Description>Updated 4 days ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleDivided;
