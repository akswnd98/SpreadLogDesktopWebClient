import Attribute from '@/src/owl-element/Attribute';
import 'reflect-metadata';
import { injectable } from 'inversify';
import CodeMirrorEditor from '..';
import { EditorEventMap } from 'codemirror';

@injectable()
export default abstract class Handler<EventName extends keyof EditorEventMap> extends Attribute {
  abstract eventName: EventName;
  abstract handle: EditorEventMap[EventName];

  register (element: CodeMirrorEditor) {
    element.editor.on(this.eventName, this.handle)
  }

  unregister(element: CodeMirrorEditor) {
    element.editor.off(this.eventName, this.handle);
  }
}
