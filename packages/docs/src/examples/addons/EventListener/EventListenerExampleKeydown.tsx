import EventListener from '@growth-ui/react/addons/EventListener';
import Heading from '@growth-ui/react/elements/Heading';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useState } from 'react';

const EventListenerExampleKeydown = () => {
  const [key, setKey] = useState('');

  const handleKeyDown = (e: any) => {
    setKey(e.key);
  };

  return (
    <div>
      <Heading>Press the keyboard to listen to the event.</Heading>
      <Paragraph>{key} pressed.</Paragraph>
      <EventListener
        name="keydown"
        listener={handleKeyDown}
        target="document"
      />
    </div>
  );
};

export default EventListenerExampleKeydown;
