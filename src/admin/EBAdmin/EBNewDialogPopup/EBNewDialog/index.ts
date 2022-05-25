import EBDialog, { ConstructorParam as ParentConstructorParam } from '@/src/admin/EBAdmin/EBNewDialogPopup/EBDialog';
import EBNewDialogBody from './EBNewDialogBody';
import OkHandler from './Handler/ok';
import CloseHandler from './Handler/close';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
};

@injectable()
export default class EBNewDialog extends EBDialog {
  constructor (
    @inject(SYMBOLS.NewDialogOkHandler) okHandler: OkHandler,
    @inject(SYMBOLS.NewDialogCloseHandler) closeHandler: CloseHandler,
    @inject(SYMBOLS.EBNewDialogBody) body: EBNewDialogBody,
  ) {
    super({
      body,
      attributes: [ okHandler, closeHandler, new Style({ styles: styles.toString() }) ],
    });
  }
}

customElements.define('eb-new-dialog', EBNewDialog);
