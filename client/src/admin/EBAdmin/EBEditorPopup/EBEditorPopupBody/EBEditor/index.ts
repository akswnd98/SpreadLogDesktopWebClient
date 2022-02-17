import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import styles from '@toast-ui/editor/dist/toastui-editor.css';
import Editor from '@toast-ui/editor';
import Style from '@/src/EBAttribute/Style';

@injectable()
export default class EBEditor extends EBElement {
  editor: Editor;

  constructor () {
    super({
      attributes: [ new Style({ styles: styles.toString() }) ],
    });
    this.editor = new Editor({
      el: this.rootElement,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: 'calc(100% - 50px)',
    });
  }
}

customElements.define('eb-editor', EBEditor);
