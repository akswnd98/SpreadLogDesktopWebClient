import EBNewDialogPopup from '.';
import Model from './EBNewDialog/EBNewDialogBody/NameInputSync/Model';
import IObserver from '@/src/IObserver';

export default class Singleton {
  private static fInstance?: EBNewDialogPopup;

  private static fModel?: Model;

  public static get instance () {
    return this.fInstance || (this.fInstance = this.generateInstance());
  }

  private static generateInstance () {
    return new EBNewDialogPopup({ model: Singleton.model });
  }

  public static get model () {
    return this.fModel || (this.fModel = new Model({ name: '', observers: new Set<IObserver>([]) }));
  }
}
