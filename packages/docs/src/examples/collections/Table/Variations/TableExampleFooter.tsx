import faker from 'faker';
import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleFooter = () => (
  <Table>
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
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeadCell colSpan={2}>{faker.lorem.sentence()}</Table.HeadCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default TableExampleFooter;
