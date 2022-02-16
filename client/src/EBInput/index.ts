import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { render, html } from 'lit-html';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBInput extends EBElement {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.registerAttribute(new Style({ styles: styles.toString() }));
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <input id='input' />
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-input', EBInput);
