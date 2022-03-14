import EBPopup, { ConstructorParam as ParentConstructorParam } from '@/src/EBPopup';
import Style from '@/src/EBAttribute/Style';
import styles from '@/src/EBPopup/index.scss';
import EBNewDialog from './EBNewDialog';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '../../types';
import CssClassPopupInterface from '@/src/PopupInterface/CssClass';

export type ConstructorParam = {
};

@injectable()
export default class EBNewDialogPopup extends EBPopup {
  constructor (
    @inject(SYMBOLS.EBNewDialog) body: EBNewDialog,
  ) {
    super({
      element: body,
      popupInterface: new CssClassPopupInterface({ showTimeClasses: [ 'show' ], hideTimeClasses: [ 'hide' ] }),
      attributes: [ new Style({ styles: styles.toString() }) ],
    });
  }
}

customElements.define('eb-new-dialog-popup', EBNewDialogPopup);
