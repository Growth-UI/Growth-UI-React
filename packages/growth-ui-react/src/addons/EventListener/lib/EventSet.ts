import { EventListeners } from '../types';

export default class EventSet {
  private readonly handlers: EventListeners;

  public constructor(eventHandlers: EventListeners) {
    this.handlers = eventHandlers.slice(0);
  }

  public addHandlers(additionalHandlers: EventListeners): EventSet {
    const newHandlers = [...this.handlers.slice(0), ...additionalHandlers];

    return new EventSet(newHandlers);
  }

  // We call the event. We don't remove the event.
  public dispatchEvent(event: Event, dispatchAll: boolean) {
    const count = this.handlers.length - 1;

    if (!dispatchAll) {
      // Heads up!
      // We don't use .pop() there because it will mutate the array.
      const recentHandler = this.handlers[count];
      recentHandler(event);

      return;
    }

    for (let i = count; i >= 0; i -= 1) {
      if (!this.handlers[i].called) {
        this.handlers[i].called = true;
        this.handlers[i](event);
      }
    }

    for (let i = count; i >= 0; i -= 1) {
      this.handlers[i].called = false;
    }
  }

  public hasHandlers(): boolean {
    return this.handlers.length > 0;
  }

  public removeHandlers(removalHandlers: EventListeners): EventSet {
    const newHandlers = [];
    const { length } = this.handlers;

    for (let i = 0; i < length; i += 1) {
      const handler = this.handlers[i];

      if (removalHandlers.indexOf(handler) === -1) {
        newHandlers.push(handler);
      }
    }

    return new EventSet(newHandlers);
  }
}
