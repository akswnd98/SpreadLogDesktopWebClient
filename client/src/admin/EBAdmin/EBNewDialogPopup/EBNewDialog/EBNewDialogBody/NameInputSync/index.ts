import EBObserverDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBObserverDecorator';
import IObserver from '@/src/IObserver';
import Model from './Model';
import EBInput from '@/src/EBInput';
import Handler from './Handler';

export type ConstructorParam = {
  model: Model;
};

export default class NameInputSync extends EBObserverDecorator {
  model: Model;

  constructor (payload: ConstructorParam) {
    super({ ...payload, originElement: new EBInput({}) });
    this.model = payload.model;
    this.registerAttribute(new Handler({ id: 'name', model: payload.model, observer: this }));
  }

  update (origin: IObserver) {
    super.update(origin);
    (this.shadowRoot!.getElementById('name') as HTMLInputElement).value = this.model.name;
  }
}

customElements.define('eb-new-dialog-name-input-sync', NameInputSync);
