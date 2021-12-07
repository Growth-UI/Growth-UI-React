import faker from 'faker';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleFixed = () => (
  <Table celled fixed>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>Employee</Table.HeadCell>
        <Table.HeadCell>Comments</Table.HeadCell>
      </Table.Row>
    </Table.Head>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{faker.lorem.paragraphs()}</Table.Cell>
        <Table.Cell>{faker.lorem.word()}</Table.Cell>
      </Table.Row>

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

export default TableExampleFixed;
