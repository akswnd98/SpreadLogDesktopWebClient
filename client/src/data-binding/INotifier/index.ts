import IObserver from '../IObserver';

export default interface INotifier {
  notify (event: any): void;

  attachObserver (observer: IObserver): void;

  detachObserver (observer: IObserver): void;
}
