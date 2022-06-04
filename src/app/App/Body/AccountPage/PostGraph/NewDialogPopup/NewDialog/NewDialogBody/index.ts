import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import Input from './Input';
import { html, render } from 'lit-html';

export type PayloadParam = {
  input: Input;
} & ParentConstructorParam;

@injectable()
export default class NewDialogBody extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      input: new Input(),
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.input}
        <hr />
      `,
      this.rootElement,
    );
  }
}

customElements.define('post-graph-new-node-dialog-body', NewDialogBody);
