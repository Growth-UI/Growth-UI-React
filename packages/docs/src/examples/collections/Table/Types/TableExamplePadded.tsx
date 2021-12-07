import Heading from '@growth-ui/react/elements/Heading';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';
import Table from '@growth-ui/react/collections/Table';

const TableExamplePadded = () => (
  <Table celled padded>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell />
        <Table.HeadCell>Rating</Table.HeadCell>
        <Table.HeadCell>Comments</Table.HeadCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Image
            centered
            src="https://m.media-amazon.com/images/I/91CtgkX800L._AC_UL640_FMwebp_QL65_.jpg"
            size="small"
          />
        </Table.Cell>
        <Table.Cell>
          <Heading as="h3">S</Heading>
        </Table.Cell>
        <Table.Cell>qwer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Image
            centered
            src="https://images-na.ssl-images-amazon.com/images/I/51+8uI+jaqL._SX327_BO1,204,203,200_.jpg"
            size="small"
          />
        </Table.Cell>
        <Table.Cell>
          <Heading as="h3">S</Heading>
        </Table.Cell>
        <Table.Cell>qwer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Image
            centered
            src="https://images-na.ssl-images-amazon.com/images/I/51aJS35SlEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            size="small"
          />
        </Table.Cell>
        <Table.Cell>
          <Heading as="h3">S</Heading>
        </Table.Cell>
        <Table.Cell>qwer</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Image
            centered
            src="http://image.yes24.com/goods/74644329/XL"
            size="small"
          />
        </Table.Cell>
        <Table.Cell>
          <Heading as="h3">S</Heading>
        </Table.Cell>
        <Table.Cell>qwer</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Image
            centered
            src="https://images-na.ssl-images-amazon.com/images/I/411b2L+7v3L._SY344_BO1,204,203,200_.jpg"
            size="small"
          />
        </Table.Cell>
        <Table.Cell>
          <Heading as="h3">S</Heading>
        </Table.Cell>
        <Table.Cell>qwer</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExamplePadded;
