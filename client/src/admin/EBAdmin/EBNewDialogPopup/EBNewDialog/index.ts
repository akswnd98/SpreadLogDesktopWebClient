import EBBasicDialog, { ConstructorParam as ParentConstructorParam } from '@/src/EBDialog/EBBasicDialog';
import EBNewDialogBody from './EBNewDialogBody';
import OkHandler from './Handler/ok';
import CloseHandler from './Handler/close';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';

export type ConstructorParam = {
};

@injectable()
export default class EBNewDialog extends EBBasicDialog {
  constructor (
    @inject(SYMBOLS.NewDialogOkHandler) okHandler: OkHandler,
    @inject(SYMBOLS.NewDialogCloseHandler) closeHandler: CloseHandler,
    @inject(SYMBOLS.EBNewDialogBody) body: EBNewDialogBody,
  ) {
    super({
      body,
      attributes: [ okHandler, closeHandler ],
    });
  }
}

customElements.define('eb-new-dialog', EBNewDialog);
