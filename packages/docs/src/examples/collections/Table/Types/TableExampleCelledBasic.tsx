import faker from 'faker';
import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleCelledBasic = () => (
  <Table basic celled>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>Employee</Table.HeadCell>
        <Table.HeadCell>Comments</Table.HeadCell>
      </Table.Row>
    </Table.Head>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Heading as="h4">{faker.name.firstName()}</Heading>
        </Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Heading as="h4">{faker.name.firstName()}</Heading>
        </Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Heading as="h4">{faker.name.firstName()}</Heading>
        </Table.Cell>
        <Table.Cell>{faker.lorem.sentences()}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleCelledBasic;
