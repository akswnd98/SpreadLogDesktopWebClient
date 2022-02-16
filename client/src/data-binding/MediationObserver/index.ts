import IObserver from '../IObserver';
import Notifier from '../Notifier';

export default abstract class MediationObserver extends Notifier implements IObserver {
  abstract update (subject: Notifier, event: any): void;
}
