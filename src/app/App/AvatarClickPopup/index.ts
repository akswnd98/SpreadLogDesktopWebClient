import Popup from '@/src/elements/Popup';
import 'reflect-metadata';
import { injectable } from 'inversify';
import CssClass from '@/src/elements/PopupInterface/CssClass';
import Body from './Body';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

@injectable()
export default class AvatarClickPopup extends Popup {
  constructor () {
    super({
      popupInterface: new CssClass({ showTimeClasses: ['show'], hideTimeClasses: ['hide'] }),
      element: new Body(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('avatar-click-popup', AvatarClickPopup);
