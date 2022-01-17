import EBNewDialogStatic from './static';
import EBPopup from '@/src/EBPopup';
import Model from './EBNewDialogBody/NameInputSync/Model';
import Observer from '@/src/Observer';

export default class EBNewDialogSingleton {
  private static fInstance?: EBPopup;

  private static fModel?: Model;

  public static get instance () {
    return this.fInstance || (this.fInstance = this.generateInstance());
  }

  private static generateInstance () {
    return new EBPopup({ body: EBNewDialogStatic.generate({ model: EBNewDialogSingleton.model }), attributes: [] } );
  }

  public static get model () {
    return this.fModel || (this.fModel = new Model({ name: '', observers: new Set<Observer>([]) }));
  }
}
