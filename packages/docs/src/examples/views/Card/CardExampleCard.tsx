import Card from '@growth-ui/react/views/Card';
import React from 'react';
import IconButton from '@growth-ui/react/addons/IconButton';

const CardExampleCard = () => (
  <Card>
    <Card.Media src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <Card.Content>
      <Card.Header>Hamburger</Card.Header>
      <Card.Meta>Food</Card.Meta>
      <Card.Description>
        A hamburger is a food, typically considered a sandwich, consisting of
        one or more cooked patties—usually ground meat, typically beef—placed
        inside a sliced bread roll or bun. The patty may be pan fried, grilled,
        smoked or flame broiled.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <IconButton name="heart" />
      <IconButton name="share" />
    </Card.Content>
  </Card>
);

export default CardExampleCard;
