import Icon from '@growth-ui/react/elements/Icon';
import List from '@growth-ui/react/elements/List';
import React from 'react';

const ListExampleTree = () => (
  <List>
    <List.Item>
      <Icon name="folder outline" />
      <List.Content>
        <List.Heading>src</List.Heading>
        <List.List>
          <List.Item>
            <Icon name="folder outline" />
            <List.Content>
              <List.Heading>pages</List.Heading>
              <List.List>
                <List.Item>
                  <Icon name="file outline" />
                  <List.Content>
                    <List.Heading>index.tsx</List.Heading>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon name="file outline" />
                  <List.Content>
                    <List.Heading>login.tsx</List.Heading>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon name="file outline" />
                  <List.Content>
                    <List.Heading>signup.tsx</List.Heading>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
        </List.List>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleTree;
