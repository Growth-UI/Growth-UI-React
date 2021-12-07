import Grid from '@growth-ui/react/collections/Grid';
import React, { useEffect, useRef, useState } from 'react';
import Ref from '@growth-ui/react/addons/Ref';
import Segment from '@growth-ui/react/elements/Segment';
import Table from '@growth-ui/react/collections/Table';

const RefExamplesRef = () => {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Grid>
      <Grid.Col width={16}>
        <Ref innerRef={ref}>
          <Segment>
            Passing ref via <code>useRef()</code>
          </Segment>
        </Ref>
        {mounted && (
          <Segment>
            <Table celled>
              <Table.Head>
                <Table.HeadCell>nodeName</Table.HeadCell>
                <Table.HeadCell>clientWidth</Table.HeadCell>
                <Table.HeadCell>clientHeight</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{ref.current?.nodeName}</Table.Cell>
                  <Table.Cell>{ref.current?.clientWidth}px</Table.Cell>
                  <Table.Cell>{ref.current?.clientHeight}px</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default RefExamplesRef;
