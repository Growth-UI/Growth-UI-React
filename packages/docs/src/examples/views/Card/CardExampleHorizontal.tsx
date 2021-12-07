import Card from '@growth-ui/react/views/Card';
import IconButton from '@growth-ui/react/addons/IconButton';
import React from 'react';

const CardExampleHorizontal = () => (
  <Card horizontal>
    <Card.Content>
      <Card.Header>뜨거운 여름밤은 가고 남은 건 볼품없지만</Card.Header>
      <Card.Meta>잔나비</Card.Meta>
      <div style={{ marginTop: 'auto' }}>
        <IconButton name="play skip back" />
        <IconButton name="play" size={35} />
        <IconButton name="play skip forward" />
      </div>
    </Card.Content>
    <Card.Media src="https://musicmeta-phinf.pstatic.net/album/005/073/5073202.jpg?type=r360Fll&v=20210303162029" />
  </Card>
);

export default CardExampleHorizontal;
