import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Popup, { ConstructorParam as ParentConstructorParam } from '@/src/elements/Popup';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import { SYMBOLS } from '@/src/app/symbols';
import EditorPopupBody from './EditorPopupBody';
import CssClass from '@/src/elements/PopupInterface/CssClass';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class EditorPopup extends Popup {
  constructor (
    @inject(SYMBOLS.EditorPopupBody) element: EditorPopupBody,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      element,
      popupInterface: new CssClass({ showTimeClasses: ['show'], hideTimeClasses: ['hide'] }),
    } as PayloadParam);
  }
}

customElements.define('editor-popup', EditorPopup);
