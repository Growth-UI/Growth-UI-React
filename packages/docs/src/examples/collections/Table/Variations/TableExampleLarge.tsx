import faker from 'faker';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleLarge = () => (
  <Table size="lg">
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>{faker.lorem.word()}</Table.HeadCell>
        <Table.HeadCell>{faker.lorem.word()}</Table.HeadCell>
      </Table.Row>
    </Table.Head>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleLarge;
