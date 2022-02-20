import IObserver from '@/src/data-binding/IObserver';
import EditingPostNotifier from '@/src/admin/data-binding/ModelNotifier/EditingPost';
import EditingPostModel, { DataType } from '@/src/admin/data-binding/Model/EditingPost';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import EditorPopupBodyTop from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/Top';
import EBEditor from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/EBEditor';

@injectable()
export default class EditingPost implements IObserver {
  async update (subject: EditingPostNotifier, event: DataType) {
    const top = Static.instance.get<EditorPopupBodyTop>(SYMBOLS.EditorPopupBodyTop);
    const editor = Static.instance.get<EBEditor>(SYMBOLS.EBEditor);
    (top.shadowRoot!.getElementById('input') as HTMLInputElement).value = subject.model.data.title;
    (editor.editor.setMarkdown(subject.model.data.body));
  }
}
