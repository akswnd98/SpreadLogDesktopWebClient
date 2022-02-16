import EBDialog, { ConstructorParam as ParentConstructorParam } from '..';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBBasicDialog extends EBDialog {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.registerAttribute(new Style({ styles: styles.toString() }));
  }
}

customElements.define('eb-basic-dialog', EBBasicDialog);
