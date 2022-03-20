import EBAttribute from '@/src/EBAttribute';
import 'reflect-metadata';
import { injectable } from 'inversify';
import EBCodeMirrorEditor from '@/src/EBCodeMirrorEditor';
import { EditorEventMap } from 'codemirror';

@injectable()
export default abstract class Handler<EventName extends keyof EditorEventMap> extends EBAttribute {
  abstract eventName: EventName;
  abstract handle: EditorEventMap[EventName];

  register (element: EBCodeMirrorEditor) {
    element.editor.on(this.eventName, this.handle)
  }

  unregister(element: EBCodeMirrorEditor) {
    element.editor.off(this.eventName, this.handle);
  }
}
