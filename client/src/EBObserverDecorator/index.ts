import EBDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBDecorator';
import IObserver from '@/src/IObserver';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBObserverDecorator extends EBDecorator implements IObserver {
  update (origin?: IObserver) {
    if (origin === this) return;
  }
}

customElements.define('eb-observer-decorator', EBObserverDecorator);
