import Checkbox from '@growth-ui/react/modules/Checkbox';
import Heading from '@growth-ui/react/elements/Heading';
import Icon from '@growth-ui/react/elements/Icon';
import List from '@growth-ui/react/elements/List';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useState } from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import Sidebar from '@growth-ui/react/modules/Sidebar';
import Spacer from '@growth-ui/react/elements/Spacer';

const SidebarExampleDimmed = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Segment>
      <Checkbox
        checked={visible}
        label="visible"
        onChange={(_, data) => setVisible(!!data.checked)}
      />

      <Spacer size={30} />

      <Sidebar.Pushable>
        <Sidebar animation="overlay" visible={visible}>
          <List relaxed selection verticalAlign="middle">
            <List.Item>
              <Icon name="npm" />
              <List.Content>NPM</List.Content>
            </List.Item>
            <List.Item>
              <Icon name="yarn" />
              <List.Content>YARN</List.Content>
            </List.Item>
          </List>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Heading>App</Heading>
          <Paragraph lineHeight="leading-7">
            Did you know water heating accounts for about 18% to 25% of your
            home energy use? For this week’s energy-saving challenge, I want you
            to check out some tips to save energy and money. ☀️Keep it Golden 👍
            <br />
            <br />- GOLDIE FACT
          </Paragraph>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Segment>
  );
};

export default SidebarExampleDimmed;
