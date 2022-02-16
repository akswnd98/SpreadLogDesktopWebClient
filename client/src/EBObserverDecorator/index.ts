import EBDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBDecorator';
import IObserver from '@/src/data-binding/IObserver';
import INotifier from '../data-binding/INotifier';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBObserverDecorator extends EBDecorator implements IObserver {
  update (subject?: INotifier) {}
}

customElements.define('eb-observer-decorator', EBObserverDecorator);
