import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { render, html } from 'lit-html';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class NameInput extends EBElement {
  initialRender () {
    render(
      html`
        <input id='name' />
      `,
      this.rootElement,
    );
  }
}

customElements.define('new-dialog-name-input', NameInput);
