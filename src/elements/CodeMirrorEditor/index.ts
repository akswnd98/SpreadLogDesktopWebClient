import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import cmStyles from 'codemirror/lib/codemirror.css';
import themeStyles from 'codemirror/theme/3024-day.css';
import CodeMirror from 'codemirror';
import { render, html } from 'lit-html';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class CodeMirrorEditor extends Element {
  editor: CodeMirror.Editor;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        new Style({ styles: cmStyles.toString() }),
        new Style({ styles: themeStyles.toString() }),
        ...payload.attributes ? payload.attributes : [],
      ],
    });
    const textAreaWrapper = document.createElement('div')! as HTMLDivElement;
    const textArea = document.createElement('textarea')! as HTMLTextAreaElement;
    textAreaWrapper.append(textArea);
    this.editor = CodeMirror.fromTextArea(textArea, {
      mode: 'gfm',
      lineNumbers: false,
      theme: '3024-day',
      lineWrapping: true,
    });
    this.editor.setSize(`calc(100% - 20px)`, `calc(100% - 20px)`);
    this.editor.refresh();
  }
}

customElements.define('code-mirror-editor', CodeMirrorEditor);
