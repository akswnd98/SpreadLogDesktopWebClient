import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import PopupInterface from '../PopupInterface';

export type ConstructorParam = {
  element: Element;
  popupInterface: PopupInterface;
} & ParentConstructorParam;

@injectable()
export default class Popup extends Element {
  element: Element;
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

customElements.define('sl-popup', Popup);
