import Button from '@growth-ui/react/elements/Button';
import Checkbox from '@growth-ui/react/modules/Checkbox';
import Heading from '@growth-ui/react/elements/Heading';
import Icon from '@growth-ui/react/elements/Icon';
import List from '@growth-ui/react/elements/List';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useReducer } from 'react';
import Sidebar from '@growth-ui/react/modules/Sidebar';
import Spacer from '@growth-ui/react/elements/Spacer';

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar animation={animation} direction={direction} visible={visible}>
    <List relaxed horizontal selection verticalAlign="middle">
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
);

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar animation={animation} direction={direction} visible={visible}>
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
);

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible };
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed };
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false };
    default:
      return state;
  }
};

const SidebarExampleTransitions = () => {
  const [state, dispatch] = useReducer(reducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  });

  const { animation, dimmed, direction, visible } = state;
  const vertical = direction === 'bottom' || direction === 'top';

  return (
    <>
      <Checkbox
        checked={dimmed}
        radio
        label="Dim page"
        onChange={(_, data) => {
          dispatch({ dimmed: !!data.checked, type: 'CHANGE_DIMMED' });
        }}
      />

      <Spacer size={20} />

      <Heading as="h4">Direction</Heading>
      <Button.Group>
        <Button
          active={direction === 'top'}
          onClick={() => {
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'top' });
          }}
        >
          Top
        </Button>
        <Button
          active={direction === 'right'}
          onClick={() => {
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'right' });
          }}
        >
          Right
        </Button>
        <Button
          active={direction === 'bottom'}
          onClick={() => {
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'bottom' });
          }}
        >
          Bottom
        </Button>
        <Button
          active={direction === 'left'}
          onClick={() => {
            dispatch({ type: 'CHANGE_DIRECTION', direction: 'left' });
          }}
        >
          Left
        </Button>
      </Button.Group>

      <Spacer size={20} />

      <Heading as="h4">Animation</Heading>
      <Button.Group>
        <Button
          active={animation === 'overlay'}
          onClick={() => {
            dispatch({ type: 'CHANGE_ANIMATION', animation: 'overlay' });
          }}
        >
          Overlay
        </Button>
        <Button
          active={animation === 'push'}
          onClick={() => {
            dispatch({ type: 'CHANGE_ANIMATION', animation: 'push' });
          }}
        >
          Push
        </Button>
      </Button.Group>

      <Spacer size={30} />

      <Sidebar.Pushable>
        {vertical && (
          <HorizontalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}

        {!vertical && (
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}

        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Heading>App</Heading>
          <Paragraph lineHeight="leading-7">
            Did you know the sun’s surface temperature is over 9,900°F? GOLDIE’S
            FACT: Your water heater doesn’t need to be anywhere near that hot.
            For this week’s energy-saving challenge, set your water heater to
            120º to save some energy. ☀️Keep it Golden 👍
            <br />
            <br />- GOLDIE FACT
          </Paragraph>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default SidebarExampleTransitions;
