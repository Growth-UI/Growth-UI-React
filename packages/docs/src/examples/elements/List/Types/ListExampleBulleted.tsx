import List from '@growth-ui/react/elements/List';
import React from 'react';

const ListExampleBulleted = () => (
  <List bulleted>
    <List.Item>React</List.Item>
    <List.Item>Node</List.Item>
    <List.Item>Flutter</List.Item>
    <List.Item>Go</List.Item>
    <List.Item>
      Cloud Services
      <List.List>
        <List.Item>AWS</List.Item>
        <List.Item>GCP</List.Item>
        <List.Item>Azure</List.Item>
      </List.List>
    </List.Item>
  </List>
);

export default ListExampleBulleted;
