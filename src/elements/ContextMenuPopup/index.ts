import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import PopupInterface from '../PopupInterface';
import { render, html } from 'lit-html';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';

export type ConstructorParam = {
  element: Element;
  popupInterface: PopupInterface;
} & ParentConstructorParam;

export type CordType = {
  x: number;
  y: number;
};

@injectable()
export default class ContextMenuPopup extends Element {
  element: Element;
  popupInterface: PopupInterface;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.element = payload.element;
    this.popupInterface = payload.popupInterface;
    this.rootElement.style.visibility = 'hidden';
    document.body.addEventListener('click', () => {
      this.hide();
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    payload.popupInterface.hide(this);
  }

  show (cord: CordType, body: Element) {
    this.replaceBody(body);
    this.rootElement.style.left = `${cord.x}px`;
    this.rootElement.style.top = `${cord.y}px`;
    this.popupInterface.show(this);
  }

  hide () {
    this.popupInterface.hide(this);
  }

  replaceBody (body: Element) {
    this.element = body;
    render(
      html`
        ${body}
      `,
      this.rootElement,
    );
  }
}

customElements.define('context-menu-popup', ContextMenuPopup);
