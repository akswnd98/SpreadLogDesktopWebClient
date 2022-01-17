import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';

export type ConstructorParam = {
  originElement: EBElement;
} & ParentConstructorParam;

export default class EBDecorator extends EBElement {
  originElement!: EBElement;

  constructor (payload: ConstructorParam) {
    super(payload);
  }

  initField (payload: ConstructorParam) {
    this.originElement = payload.originElement;
  }

  initialRender () {
    this.rootElement.remove();
    this.rootElement = this.originElement.rootElement;
    Object.entries(this.originElement.shadowRoot!.children).forEach(([key, child]) => {
      this.shadowRoot!.appendChild(child);
    });
  }
}

customElements.define('eb-decorator', EBDecorator);
