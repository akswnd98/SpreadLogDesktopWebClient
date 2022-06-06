import Dialog from '../Dialog';
import EBNewDialogBody from './NewDialogBody';
import OkHandler from './Handler/ok';
import CloseHandler from './Handler/close';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
};

@injectable()
export default class NewDialog extends Dialog {
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

customElements.define('new-dialog', NewDialog);
