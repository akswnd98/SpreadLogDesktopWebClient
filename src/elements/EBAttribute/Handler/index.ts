import EBElement from '@/src/EBElement';
import { injectable, unmanaged } from 'inversify';
import EBAttribute, { ConstructorParam as ParentConstructorParam } from '..';

export type ConstructorParam = {
  id: string;
} & ParentConstructorParam;

@injectable()
export default abstract class Handler<Event extends keyof HTMLElementEventMap> extends EBAttribute {
  id: string;
  abstract eventName: Event;
  registeredHandler?: (event: HTMLElementEventMap[Event]) => void;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.id = payload.id;
  }

  register (element: EBElement) {
    this.registeredHandler = (event: HTMLElementEventMap[Event]) => { this.handle(event); };
    element.shadowRoot!.getElementById(this.id)?.addEventListener(
      this.eventName,
      this.registeredHandler,
    );
  }

  unregister(element: EBElement): void {
    if (this.registeredHandler === undefined) return;
    element.shadowRoot!.getElementById(this.id)?.removeEventListener(
      this.eventName,
      this.registeredHandler,
    );
    this.registeredHandler = undefined;
  }

  abstract handle (event: HTMLElementEventMap[Event]): Promise<void>;
}
