import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';

export type ConstructorParam = {
  originElement: EBElement;
} & ParentConstructorParam;

@injectable()
export default class EBDecorator extends EBElement {
  originElement: EBElement;

  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.originElement = payload.originElement;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    this.rootElement.remove();
    this.rootElement = payload.originElement.rootElement;
    Object.entries(payload.originElement.shadowRoot!.children).forEach(([key, child]) => {
      this.shadowRoot!.appendChild(child);
    });
  }
}

customElements.define('eb-decorator', EBDecorator);
