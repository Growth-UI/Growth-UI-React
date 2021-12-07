import faker from 'faker';
import List from '@growth-ui/react/elements/List';
import React from 'react';

const ListExampleSelection = () => (
  <List padded selection verticalAlign="middle">
    <List.Item>
      <List.Image rounded src={faker.image.people(28, 28)} />
      <List.Content>
        <List.Heading>{faker.name.firstName()}</List.Heading>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Image circular src={faker.image.people(28, 28)} />
      <List.Content>
        <List.Heading>{faker.name.firstName()}</List.Heading>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleSelection;
