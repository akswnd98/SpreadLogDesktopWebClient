import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';
import { html, render } from 'lit-html';
import PopupInterface from '../PopupInterface';

export type ConstructorParam = {
  element: EBElement;
  popupInterface: PopupInterface;
} & ParentConstructorParam;

@injectable()
export default class EBPopup extends EBElement {
  element: EBElement;
  popupInterface: PopupInterface;

  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.element = payload.element;
    this.popupInterface = payload.popupInterface;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        ${payload.element}
      `,
      this.rootElement,
    );
    payload.popupInterface.hide(this);
  }

  show () {
    this.popupInterface.show(this);
  }

  hide () {
    this.popupInterface.hide(this);
  }
}

customElements.define('eb-popup', EBPopup);
