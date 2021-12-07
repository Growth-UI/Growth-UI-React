import Chart from './Chart';
import Grid from '@growth-ui/react/collections/Grid';
import IconButton from '@growth-ui/react/addons/IconButton';
import List from '@growth-ui/react/elements/List';
import Stats from './Stats';
import Navbar from './Navbar';
import React, { useState } from 'react';
import RecentOrders from './RecentOrders';
import Sidebar from '@growth-ui/react/modules/Sidebar';
import Spacer from '@growth-ui/react/elements/Spacer';

const Dashboard = () => {
  const [visible, setVisible] = useState(true);

  const toggleSidebar = () => setVisible(!visible);

  return (
    <Sidebar.Pushable>
      <Sidebar visible={visible}>
        <List relaxed>
          <List.Item>
            <IconButton name="dashboard" />
          </List.Item>
          <List.Item>
            <IconButton name="package" />
          </List.Item>
          <List.Item>
            <IconButton name="shipping" />
          </List.Item>
          <List.Item>
            <IconButton name="people" />
          </List.Item>
          <List.Item>
            <IconButton name="confirmation number" />
          </List.Item>
        </List>
      </Sidebar>
      <Sidebar.Pusher>
        <Navbar toggleSidebar={toggleSidebar} />
        <Spacer size={30} />
        <Grid>
          <Grid.Row horizontalAlign="center">
            <Grid.Col width={15}>
              <Chart />
              <Stats />
              <RecentOrders />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Dashboard;
