import faker from 'faker';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleCelledStriped = () => (
  <Table celled striped>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell colSpan="3">{faker.lorem.word()}</Table.HeadCell>
      </Table.Row>
    </Table.Head>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{faker.lorem.lines()}</Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>{faker.lorem.lines()}</Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>{faker.lorem.lines()}</Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>{faker.lorem.lines()}</Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleCelledStriped;
