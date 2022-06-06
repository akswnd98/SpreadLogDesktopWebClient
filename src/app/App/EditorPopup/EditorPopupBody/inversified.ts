import EditorPopupBody from '.';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Editor from './Editor';
import Title from './Title';

@injectable()
export default class Inversified extends EditorPopupBody {
  constructor () {
    super({
      titleElement: new Title(),
      editorElement: new Editor(),
    });
  }
}

customElements.define('editor-popup-body-lazer-inversified', Inversified);
