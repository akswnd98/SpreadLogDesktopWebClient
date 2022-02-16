import { injectable, unmanaged } from 'inversify';
import INotifier from '../INotifier';
import IObserver from '../IObserver';

export type ConstructorParam = {
  observers?: Set<IObserver>;
};

@injectable()
export default class Notifier implements INotifier {
  observers: Set<IObserver> = new Set<IObserver>();

  constructor (@unmanaged() payload: ConstructorParam) {
    if (payload.observers !== undefined) this.observers = payload.observers;
  }

  notify (event: any) {
    this.observers.forEach((observer) => {
      observer.update(this, event);
    });
  }

  attachObserver (observer: IObserver) {
    this.observers.add(observer);
  }

  detachObserver (observer: IObserver) {
    this.observers.delete(observer);
  }
}
