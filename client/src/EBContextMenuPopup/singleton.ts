import Style from '../EBAttribute/Style';
import styles from './index.scss';
import EBContextMenuPopup from '.';

export default class EBContextMenuPopupSingleton {
  private static fInstance?: EBContextMenuPopup;

  public static get instance () {
    return this.fInstance || (this.fInstance = this.generateInstance());
  }

  private static generateInstance () {
    return new EBContextMenuPopup({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      childElements: [],
    });
  }
}
