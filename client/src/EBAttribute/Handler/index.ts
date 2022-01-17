import EBElement from '@/src/EBElement';
import { injectable, unmanaged } from 'inversify';
import 'reflect-metadata';
import EBAttribute, { ConstructorParam as ParentConstructorParam } from '..';

export type ConstructorParam<Event extends keyof HTMLElementEventMap> = {
  id: string;
} & ParentConstructorParam;

@injectable()
export default abstract class Handler<Event extends keyof HTMLElementEventMap> extends EBAttribute {
  id: string;
  abstract eventName: Event;

  constructor (@unmanaged() payload: ConstructorParam<Event>) {
    super();
    this.id = payload.id;
  }

  register (element: EBElement) {
    element.shadowRoot!.getElementById(this.id)?.addEventListener(this.eventName, this.handle);
  }

  unregister(element: EBElement): void {
    element.shadowRoot!.getElementById(this.id)?.removeEventListener(this.eventName, this.handle);
  }

  abstract handle (event: HTMLElementEventMap[Event]): void;
}
