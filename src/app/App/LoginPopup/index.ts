import Popup, { ConstructorParam as ParentConstructorParam } from '@/src/elements/Popup';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import LoginPopupBody from './Body';
import CssClassPopupInterface from '@/src/elements/PopupInterface/CssClass';
import { SYMBOLS } from '../../symbols';

@injectable()
export default class LoginPopup extends Popup {
  body: LoginPopupBody;

  constructor (
    @inject(SYMBOLS.LoginPopupBody) body: LoginPopupBody,
  ) {
    super({
      element: body,
      popupInterface: new CssClassPopupInterface({ showTimeClasses: [ 'show' ], hideTimeClasses: [ 'hide' ] }),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.body = body;
  }
}

customElements.define('login-popup', LoginPopup);
