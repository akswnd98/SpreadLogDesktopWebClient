import EBEditorPopupBody from '.';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Editor from './Editor';

@injectable()
export default class Inversified extends EBEditorPopupBody {
  constructor (
    @inject(SYMBOLS.EBEditor) editor: Editor,
  ) {
    super({
      editor,
    });
  }
}

customElements.define('eb-editor-popup-body-lazer-inversified', Inversified);
