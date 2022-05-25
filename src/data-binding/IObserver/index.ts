import INotifier from '../INotifier';

export default interface IObserver {
  update (subject: INotifier, event: any): Promise<void>;
}
