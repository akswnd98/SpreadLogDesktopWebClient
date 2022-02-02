import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import Model from '../Model';
import NameInputSync from '..';

export type ConstructorParam = {
  model: Model;
  observer: NameInputSync;
} & ParentConstructorParam;

export default class InputHandler extends Handler<'input'> {
  eventName: 'input' = 'input';
  model: Model;
  observer: NameInputSync;

  constructor (payload: ConstructorParam) {
    super(payload);
    this.model = payload.model;
    this.observer = payload.observer;
  }

  handle (event: InputEvent) {
    if (event.data === null) return;
    this.model.setName((this.observer.shadowRoot!.getElementById('name') as HTMLInputElement).value, this.observer);
  }
}
