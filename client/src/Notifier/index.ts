import Observer from '@/src/Observer';

export type ConstructorParam = {
  observers: Set<Observer>;
};

export default class Notifier {
  observers: Set<Observer>;

  constructor (payload: ConstructorParam) {
    this.observers = payload.observers;
  }

  notify (origin?: Observer) {
    this.observers.forEach((observer) => {
      if (observer === origin) return;
      observer.update(origin);
    });
  }

  attachObserver (observer: Observer) {
    this.observers.add(observer);
  }

  detachObserver (observer: Observer) {
    this.observers.delete(observer);
  }
}
