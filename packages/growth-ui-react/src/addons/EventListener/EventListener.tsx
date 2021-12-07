import React, { useEffect } from 'react';

const EventListener = (props: EventListenerProps) => {
  const { listener, type } = props;

  useEffect(() => {
    document.addEventListener(type, listener);

    return () => {
      document.removeEventListener(type, listener);
    };
  }, []);

  return <></>;
};

// ======================================================
export interface EventListenerProps {
  /** Called on event occurrence. */
  listener: (
    this: Document,
    event: DocumentEventMap[keyof DocumentEventMap],
    options?: boolean | AddEventListenerOptions,
  ) => void;

  /** Event type. */
  type: keyof DocumentEventMap;
}

export default EventListener;
