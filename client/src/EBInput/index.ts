import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { render, html } from 'lit-html';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBInput extends EBElement {
  constructor (payload: ConstructorParam) {
    super(payload);
    this.registerAttribute(new Style({ styles: styles.toString() }));
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <input id='name' />
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-input', EBInput);
