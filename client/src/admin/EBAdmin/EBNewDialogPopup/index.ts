import EBPopupDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBPopupDecorator';
import Style from '@/src/EBAttribute/Style';
import styles from '@/src/EBPopupDecorator/index.scss';
import EBNewDialog from './EBNewDialog';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '../../types';

export type ConstructorParam = {
};

@injectable()
export default class EBNewDialogPopup extends EBPopupDecorator {
  constructor (
    @inject(SYMBOLS.EBNewDialog) originElement: EBNewDialog,
  ) {
    super({ originElement });
    this.registerAttribute(new Style({ styles: styles.toString() }));
  }
}

customElements.define('eb-new-dialog-popup', EBNewDialogPopup);
