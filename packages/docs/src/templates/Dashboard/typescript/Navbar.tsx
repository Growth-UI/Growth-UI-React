import Badge from '@growth-ui/react/elements/Badge';
import Container from '@growth-ui/react/elements/Container';
import Dropdown from '@growth-ui/react/modules/Dropdown';
import Grid from '@growth-ui/react/collections/Grid';
import IconButton from '@growth-ui/react/addons/IconButton';
import Image from '@growth-ui/react/elements/Image';
import React from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

type Props = {
  toggleSidebar: () => void;
};

const trigger = (
  <span>
    <Image
      avatar
      lazy={false}
      size="mini"
      src="https://avatars.githubusercontent.com/u/20750054?v=4"
    />
    &nbsp; admin
  </span>
);

const Navbar = ({ toggleSidebar }: Props) => {
  return (
    <Container as="nav" fluid shadow>
      <Grid css="padding: 1rem;">
        <Grid.Row verticalAlign="middle" horizontalAlign="space-between">
          <Grid.Col>
            <IconButton name="menu" onClick={toggleSidebar} />
          </Grid.Col>
          <Grid.Col>
            <Grid.Row verticalAlign="middle">
              <Badge content={3}>
                <IconButton name="notifications" />
              </Badge>

              <Spacer size={30} />

              <Dropdown
                trigger={trigger}
                options={[
                  {
                    text: 'Log out',
                  },
                ]}
              />
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Navbar;
