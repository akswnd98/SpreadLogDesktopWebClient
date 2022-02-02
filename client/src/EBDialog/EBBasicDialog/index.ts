import EBDialog, { ConstructorParam as ParentConstructorParam } from '..';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBBasicDialog extends EBDialog {
  constructor (payload: ConstructorParam) {
    super(payload);
    this.registerAttribute(new Style({ styles: styles.toString() }));
  }
}

customElements.define('eb-basic-dialog', EBBasicDialog);
