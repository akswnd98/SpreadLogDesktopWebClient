import EBObserverDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBObserverDecorator';
import IObserver from '@/src/IObserver';
import Model from './Model';

export type ConstructorParam = {
  model: Model;
} & ParentConstructorParam;

export default class NameInputSync extends EBObserverDecorator {
  model!: Model;

  initField (payload: ConstructorParam) {
    super.initField(payload);
    this.model = payload.model;
  }

  update (origin: IObserver) {
    super.update(origin);
    (this.shadowRoot!.getElementById('name') as HTMLInputElement).value = this.model.name;
  }
}
