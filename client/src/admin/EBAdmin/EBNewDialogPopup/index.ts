import EBPopupDecorator, { ConstructorParam as ParentConstructorParam } from '@/src/EBPopupDecorator';
import Style from '@/src/EBAttribute/Style';
import styles from '@/src/EBPopupDecorator/index.scss';
import EBNewDialog from './EBNewDialog';
import Model from './EBNewDialog/EBNewDialogBody/NameInputSync/Model';

export type ConstructorParam = {
  model: Model;
};

export default class EBNewDialogPopup extends EBPopupDecorator {
  constructor (payload: ConstructorParam) {
    super({ originElement: new EBNewDialog(payload) });
    this.registerAttribute(new Style({ styles: styles.toString() }));
  }
}

customElements.define('eb-new-dialog-popup', EBNewDialogPopup);
