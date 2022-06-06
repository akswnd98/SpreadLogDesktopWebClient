import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { render, html } from 'lit-html';
import Editor from './Editor';
import Title from './Title';

export type ConstructorParam = {
  editorElement: Editor;
  titleElement: Title;
} & ParentConstructorParam;

@injectable()
export default class EditorPopupBody extends Element {
  titleElement: Title;
  editorElement: Editor;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    } as ConstructorParam);
    this.titleElement = payload.titleElement;
    this.editorElement = payload.editorElement;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='titleWrapper'>
          ${payload.titleElement}
        </div>
        <div id='editorWrapper'>
          ${payload.editorElement}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('editor-popup-body', EditorPopupBody);
