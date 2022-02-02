import EBBasicDialog, { ConstructorParam as ParentConstructorParam } from '@/src/EBDialog/EBBasicDialog';
import Model from './EBNewDialogBody/NameInputSync/Model';
import EBNewDialogBody from './EBNewDialogBody';
import OkHandler from './Handler/ok';
import CloseHandler from './Handler/close';

export type ConstructorParam = {
  model: Model;
};

export default class EBNewDialog extends EBBasicDialog {
  model: Model;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      body: new EBNewDialogBody(payload),
      attributes: [ new OkHandler(), new CloseHandler() ],
    });
    this.model = payload.model;
  }
}

customElements.define('eb-new-dialog', EBNewDialog);
