import faker from 'faker';
import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Table from '@growth-ui/react/collections/Table';

const RecentOrders = () => {
  return (
    <Segment>
      <Heading as="h3">Recent Orders</Heading>
      <Table basic celled>
        <Table.Head>
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Product</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{faker.datatype.uuid()}</Table.Cell>
            <Table.Cell>10-01-2021</Table.Cell>
            <Table.Cell>$245</Table.Cell>
            <Table.Cell>{faker.lorem.word()}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{faker.datatype.uuid()}</Table.Cell>
            <Table.Cell>10-01-2021</Table.Cell>
            <Table.Cell>$245</Table.Cell>
            <Table.Cell>{faker.lorem.word()}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{faker.datatype.uuid()}</Table.Cell>
            <Table.Cell>10-01-2021</Table.Cell>
            <Table.Cell>$450</Table.Cell>
            <Table.Cell>{faker.lorem.word()}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>{faker.datatype.uuid()}</Table.Cell>
            <Table.Cell>10-01-2021</Table.Cell>
            <Table.Cell>$13,000</Table.Cell>
            <Table.Cell>{faker.lorem.word()}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default RecentOrders;
