import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExampleTable = () => (
  <Table celled>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>Head1</Table.HeadCell>
        <Table.HeadCell>Head2</Table.HeadCell>
        <Table.HeadCell>Head3</Table.HeadCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Row1 - Cell1</Table.Cell>
        <Table.Cell>Row1 - Cell2</Table.Cell>
        <Table.Cell>Row1 - Cell3</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Row2 - Cell1</Table.Cell>
        <Table.Cell>Row2 - Cell2</Table.Cell>
        <Table.Cell>Row2 - Cell3</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleTable;
