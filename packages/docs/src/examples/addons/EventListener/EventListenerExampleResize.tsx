import EventListener from '@growth-ui/react/addons/EventListener';
import Heading from '@growth-ui/react/elements/Heading';
import Paragraph from '@growth-ui/react/elements/Paragraph';
import React, { useState } from 'react';

const EventListenerExampleResize = () => {
  const [log, setLog] = useState('');

  const handleLogging = () => {
    setLog(`width: ${window.innerWidth}px height: ${window.innerHeight}`);
  };

  return (
    <div>
      <Heading>Resize the brower to listen to the event.</Heading>
      <Paragraph>Window resize -&gt; {log}</Paragraph>
      <EventListener name="resize" listener={handleLogging} target="window" />
    </div>
  );
};

export default EventListenerExampleResize;
