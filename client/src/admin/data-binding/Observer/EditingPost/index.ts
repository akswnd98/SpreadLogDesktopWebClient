import IObserver from '@/src/data-binding/IObserver';
import EditingPostNotifier from '@/src/admin/data-binding/ModelNotifier/EditingPost';
import EditingPostModel, { DataType } from '@/src/admin/data-binding/Model/EditingPost';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import EBEditor from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/Editor';
import EBEditorPopupBody from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody';

@injectable()
export default class EditingPost implements IObserver {
  async update (subject: EditingPostNotifier, event: DataType) {
    const title = Static.instance.get<EBEditorPopupBody>(SYMBOLS.EBEditorPopupBody).titleElement.shadowRoot!.getElementById('input')! as HTMLInputElement;
    const editor = Static.instance.get<EBEditor>(SYMBOLS.EBEditor);
    title.value = subject.model.data.title;
    editor.setMarkdown(subject.model.data.body);
    editor.editor.refresh();
  }
}
