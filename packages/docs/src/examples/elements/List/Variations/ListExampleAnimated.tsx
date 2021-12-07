import faker from 'faker';
import List from '@growth-ui/react/elements/List';
import React from 'react';
import times from 'lodash/times';

const ListExampleAnimated = () => (
  <List animated padded verticalAlign="middle">
    {times(5, (num) => (
      <List.Item key={num}>
        <List.Image rounded src={faker.image.people(28, 28)} />
        <List.Content>
          <List.Heading>{faker.name.firstName()}</List.Heading>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default ListExampleAnimated;
