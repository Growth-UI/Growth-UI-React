import Collapse from '@growth-ui/react/modules/Collapse';
import Grid from '@growth-ui/react/collections/Grid';
import Icon from '@growth-ui/react/elements/Icon';
import List from '@growth-ui/react/elements/List';
import React, { useState } from 'react';
import Spacer from '@growth-ui/react/elements/Spacer';

const ListExampleCollapse = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <List padded selection verticalAlign="middle" style={{ maxWidth: '360px' }}>
      <List.Item>
        <Icon name="drafts" />
        <List.Content>Drafts</List.Content>
      </List.Item>
      <List.Item onClick={handleClick}>
        <Grid.Row horizontalAlign="space-between" verticalAlign="middle">
          <div>
            <Icon name="inbox" />
            <Spacer inline axis="horizontal" size={8} />
            Inbox
          </div>
          <Icon name="chevron down" flipped={open} />
        </Grid.Row>
      </List.Item>
      <Collapse expanded={open}>
        <List padded selection verticalAlign="middle">
          <List.Item style={{ paddingLeft: '2em' }}>
            <Icon name="star" />
            <List.Content>Starred</List.Content>
          </List.Item>
        </List>
      </Collapse>
    </List>
  );
};

export default ListExampleCollapse;
