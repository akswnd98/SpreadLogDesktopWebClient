import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Input from './Input';
import { html, render } from 'lit-html';

export type PayloadParam = {
  input: Input;
} & ParentConstructorParam;

@injectable()
export default class EBNewDialogBody extends EBElement {
  constructor (
    @inject(SYMBOLS.NewNodeInput) input: Input,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      input,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam): void {
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

customElements.define('eb-new-dialog-body', EBNewDialogBody);
