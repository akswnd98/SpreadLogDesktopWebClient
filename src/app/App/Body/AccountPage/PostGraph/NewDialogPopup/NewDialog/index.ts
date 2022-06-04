import Dialog from '@/src/elements/Dialog';
import OkHandler from './Handler/ok';
import CloseHandler from './Handler/close';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import NewDialogBody from './NewDialogBody';

export type ConstructorParam = {
};

@injectable()
export default class NewDialog extends Dialog {
  constructor () {
    super({
      body: new NewDialogBody(),
      attributes: [ new OkHandler(), new CloseHandler(), new Style({ styles: styles.toString() }) ],
    });
  }
}

customElements.define('post-graph-new-node-dialog', NewDialog);
