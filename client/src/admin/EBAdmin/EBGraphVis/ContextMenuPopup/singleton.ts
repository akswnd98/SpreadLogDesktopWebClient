import EBContextMenuPopup from '@/src/EBContextMenuPopup';
import selectionList from './selectionList';

export default class Singleton {
  private static fInstance?: EBContextMenuPopup;

  public static get instance () {
    return this.fInstance || (this.fInstance = this.generateInstance());
  }

  private static generateInstance () {
    return new EBContextMenuPopup({
      childElements: selectionList,
    });
  }
}
