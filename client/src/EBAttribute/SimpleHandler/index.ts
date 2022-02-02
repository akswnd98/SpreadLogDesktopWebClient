import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';

export type ConstructorParam<Event extends keyof HTMLElementEventMap> = {
  handler: (event: HTMLElementEventMap[Event]) => void;
  eventName: Event;
} & ParentConstructorParam;

export default class SimpleHandler<Event extends keyof HTMLElementEventMap> extends Handler<Event> {
  eventName: Event;

  constructor (payload: ConstructorParam<Event>) {
    super(payload);
    this.handle = payload.handler;
    this.eventName = payload.eventName;
  }

  handle (event: HTMLElementEventMap[Event]) {}
}
