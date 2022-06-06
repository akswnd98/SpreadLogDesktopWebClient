import Static from '@/src/app/inversify.config';
import INotifier from '@/src/owl-data-binding/INotifier';
import Editor from '..';
import { EventType } from '../../../Notifier/EditingPostId';
import EditorPopupBody from '@/src/app/App/EditorPopup/EditorPopupBody/inversified';
import { SYMBOLS } from '@/src/app/symbols';

export default class Body extends Editor {
  async update (subject: INotifier, event: EventType) {
    const editorElement = Static.instance.get<EditorPopupBody>(SYMBOLS.EditorPopupBody).editorElement;
    editorElement.setMarkdown(event.body);
  }
}
