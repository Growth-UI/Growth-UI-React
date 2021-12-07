import faker from 'faker';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleTextAlignment = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>{faker.lorem.word()}</Table.HeadCell>
        <Table.HeadCell textAlign="right">{faker.lorem.word()}</Table.HeadCell>
      </Table.Row>
    </Table.Head>

    <Table.Body>
      <Table.Row textAlign="center">
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

export default TableExampleTextAlignment;
