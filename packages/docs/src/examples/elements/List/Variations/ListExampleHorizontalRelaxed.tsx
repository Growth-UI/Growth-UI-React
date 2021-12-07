import faker from 'faker';
import List from '@growth-ui/react/elements/List';
import React from 'react';

const ListExampleHorizontalRelaxed = () => (
  <List horizontal relaxed verticalAlign="middle">
    <List.Item>
      <List.Image rounded src={faker.image.people(28, 28)} />
      <List.Content>
        <List.Heading>{faker.name.firstName()}</List.Heading>
        <List.Description>{faker.random.words()}</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Image circular src={faker.image.people(28, 28)} />
      <List.Content>
        <List.Heading>{faker.name.firstName()}</List.Heading>
        <List.Description>{faker.random.words()}</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleHorizontalRelaxed;
