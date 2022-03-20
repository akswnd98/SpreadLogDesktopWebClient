import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import cmStyles from 'codemirror/lib/codemirror.css';
import themeStyles from 'codemirror/theme/material.css';
import CodeMirror from 'codemirror';
import { render, html } from 'lit-html';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Editor extends EBElement {
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
      theme: 'material',
      lineWrapping: true,
    });
    this.editor.setSize(`calc(100% - 20px)`, `calc(100% - 20px)`);
    this.editor.refresh();
  }
}

customElements.define('eb-code-mirror-editor', Editor);
