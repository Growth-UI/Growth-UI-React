import React from 'react';
import { InputEventListener, InputTargetElement } from './types';
import { instance } from './lib';
/* eslint-disable class-methods-use-this */

export interface EventListenerProps {
  /** An event name on which we will subscribe. */
  name: string;

  /** An event handler or array of event handlers. */
  listener: InputEventListener;

  /** A name of pool. */
  pool?: string;

  /** A DOM element on which we will subscribe. */
  target?: InputTargetElement;
}

/**
 * This component exposes the EventListener API as public and provides a declarative way to manage it.
 */
export default class EventListener extends React.PureComponent<EventListenerProps> {
  componentDidMount() {
    this.subscribe(this.props);
  }

  componentDidUpdate(prevProps: EventListenerProps) {
    this.unsubscribe(prevProps);
    this.subscribe(this.props);
  }

  componentWillUnmount() {
    this.unsubscribe(this.props);
  }

  subscribe(props: Readonly<EventListenerProps>) {
    const { name, listener, pool = 'default', target = 'document' } = props;

    instance.sub(name, listener, { pool, target });
  }

  unsubscribe(props: Readonly<EventListenerProps>) {
    const { name, listener, pool = 'default', target = 'document' } = props;

    instance.unsub(name, listener, { pool, target });
  }

  render() {
    return null;
  }
}
