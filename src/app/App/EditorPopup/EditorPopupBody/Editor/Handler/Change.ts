import Handler from '@/src/elements/CodeMirrorEditor/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { Editor as CodeMirrorEditor, EditorChange } from 'codemirror';
import Editor from '..';

export type ConstructorParam = {
  editor: Editor
};

@injectable()
export default class Change extends Handler<'change'> {
  eventName: 'change' = 'change';

  editor: Editor;

  constructor (payload: ConstructorParam) {
    super();
    this.editor = payload.editor;
  }

  handle = (instance: CodeMirrorEditor, changeObj: EditorChange) => {
    this.editor.update();
  };
}
