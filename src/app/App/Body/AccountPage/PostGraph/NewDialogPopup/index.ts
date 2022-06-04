import Popup, { ConstructorParam as ParentConstructorParam } from '@/src/elements/Popup';
import Style from '@/src/owl-element/Attribute/Style';
import popupStyles from '@/src/elements/Popup/index.scss';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CssClassPopupInterface from '@/src/elements/PopupInterface/CssClass';
import NewDialog from './NewDialog';

export type ConstructorParam = {
};

@injectable()
export default class NewDialogPopup extends Popup {
  constructor () {
    super({
      element: new NewDialog(),
      popupInterface: new CssClassPopupInterface({ showTimeClasses: [ 'show' ], hideTimeClasses: [ 'hide' ] }),
      attributes: [
        new Style({ styles: popupStyles.toString() }),
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('post-graph-new-node-dialog-popup', NewDialogPopup);
