import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import Model from '../../Model';
import EBObserverDecorator from '@/src/EBObserverDecorator';

export type ConstructorParam = {
  model: Model;
  observer: EBObserverDecorator;
} & ParentConstructorParam<'input'>;

export default class ModelHandler extends Handler<'input'> {
  eventName: 'input' = 'input';
  model: Model;
  observer: EBObserverDecorator;

  constructor (payload: ConstructorParam) {
    super(payload);
    this.model = payload.model;
    this.observer = payload.observer;
  }

  handle (event: InputEvent) {
    if (event.data === null) return;
    this.model.setName(event.data, this.observer);
  }
}
