import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';

export type ConstructorParam<Event extends keyof HTMLElementEventMap> = {
  handler: (event: HTMLElementEventMap[Event]) => Promise<void>;
  eventName: Event;
} & ParentConstructorParam;

export default class SimpleHandler<Event extends keyof HTMLElementEventMap> extends Handler<Event> {
  eventName: Event;

  constructor (payload: ConstructorParam<Event>) {
    super(payload);
    this.handle = payload.handler;
    this.eventName = payload.eventName;
  }

  async handle (event: HTMLElementEventMap[Event]) {}
}
