import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '../EBAttribute/Style';
import styles from './index.scss';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';
import PopupInterface from '../PopupInterface';
import { render, html } from 'lit-html';

export type ConstructorParam = {
  element: EBElement;
  popupInterface: PopupInterface;
} & ParentConstructorParam;

export type CordType = {
  x: number;
  y: number;
};

@injectable()
export default class EBContextMenuPopup extends EBElement {
  element: EBElement;
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

  show (cord: CordType) {
    this.rootElement.style.visibility = 'visible';
    this.rootElement.style.left = `${cord.x}px`;
    this.rootElement.style.top = `${cord.y}px`;
    this.popupInterface.show(this);
  }

  hide () {
    this.popupInterface.hide(this);
    this.rootElement.style.visibility = 'hidden';
  }

  replaceBody (body: EBElement) {
    this.element = body;
    render(
      html`
        ${body}
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-context-menu-popup', EBContextMenuPopup);
