import EBElement, { type ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { render, html } from 'lit-html';
import Editor from './Editor';
import Title from './Title';

export type ConstructorParam = {
  editor: Editor;
} & ParentConstructorParam;

@injectable()
export default class EBEditorPopupBody extends EBElement {
  titleElement: Title;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.titleElement = new Title();
    render(
      html`
        ${this.titleElement}
      `,
      this.shadowRoot!.getElementById('titleWrapper')!,
    );
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='titleWrapper'></div>
        <div id='editorWrapper'>
          ${payload.editor}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('eb-editor-popup-body', EBEditorPopupBody);
