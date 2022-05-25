import Handler from '@/src/EBCodeMirrorEditor/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { Editor as CodeMirrorEditor, EditorChange } from 'codemirror';
import Editor from '..';

export type ConstructorParam = {
  editor: Editor;
};

@injectable()
export default class Scroll extends Handler<'scroll'> {
  eventName: 'scroll' = 'scroll';

  editor: Editor

  constructor (payload: ConstructorParam) {
    super();
    this.editor = payload.editor;
  }
  handle = (instance: CodeMirrorEditor) => {
    const curTop = this.editor.editor.getScrollInfo().top;
    const curBottom = curTop + this.editor.editor.getScrollInfo().clientHeight;
    if (curTop <= 0) this.editor.shadowRoot!.getElementById('rightWrapper')!.scrollTop = 0;
    else if (curBottom >= this.editor.editor.getScrollInfo().height - 1) {
      this.editor.shadowRoot!.getElementById('rightWrapper')!.scrollTop = this.editor.shadowRoot!.getElementById('rightWrapper')!.clientHeight - 1;
    }
    else this.editor.shadowRoot!.getElementById('rightWrapper')!.scrollTop = this.editor.editorPreviewScrollMap[this.searchIndex()][1];
  };

  searchIndex () {
    const curTop = this.editor.editor.getScrollInfo().top;
    let left = 0, right = this.editor.editorPreviewScrollMap.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (this.editor.editorPreviewScrollMap[mid][0] <= curTop) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}
