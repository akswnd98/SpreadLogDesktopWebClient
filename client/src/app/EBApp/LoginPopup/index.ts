import EBPopup, { ConstructorParam as ParentConstructorParam } from '@/src/EBPopup';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import LoginPopupBody from './Body';
import CssClassPopupInterface from '@/src/PopupInterface/CssClass';
import { SYMBOLS } from '../../types';


@injectable()
export default class LoginPopup extends EBPopup {
  body: LoginPopupBody;

  constructor (
    @inject(SYMBOLS.LoginPopupBody) body: LoginPopupBody,
  ) {
    super({
      element: body,
      popupInterface: new CssClassPopupInterface({ showTimeClasses: [ 'show' ], hideTimeClasses: [ 'hide' ] }),
      attributes: [ new Style({ styles: styles.toString() }) ],
    });
    this.body = body;
  }
}

customElements.define('login-popup', LoginPopup);
