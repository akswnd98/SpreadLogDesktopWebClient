import EBElement from '@/src/EBElement';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import styles from './index.scss';
import Style from '@/src/EBAttribute/Style';
import { render, html } from 'lit-html';
import EBEditor from './EBEditor';
import { SYMBOLS } from '@/src/admin/types';
import OkButton from './Bottom/OkButton';
import CancelButton from './Bottom/CancelButton';
import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalDictLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalDictLayout';
import EBLayout from '@/src/EBLayout';
import EditorPopupBodyBottom from './Bottom';
import EditorPopupBodyTop from './Top';

export type ConstructorParam = {
} & ParentConstructorParam;

export type PayloadParam = {
  layout: EBVerticalDictLayout;
  childElements: ChildElementsType;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopupBody extends EBContainerElement<ChildElementsType> {
  constructor (
    @inject(SYMBOLS.EditorPopupBodyTop) top: EditorPopupBodyTop,
    @inject(SYMBOLS.EditorPopupBodyBottom) bottom: EditorPopupBodyBottom,
    @inject(SYMBOLS.EBEditor) ebEditor: EBEditor,
  ) {
    super({
      layout: new EBVerticalDictLayout(),
      childElements: {
        top,
        center: ebEditor,
        bottom,
      },
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    } as PayloadParam);
  }
}

customElements.define('eb-editor-popup-body', EBEditorPopupBody);
