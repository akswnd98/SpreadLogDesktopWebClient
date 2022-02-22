import EditingPostIdNotifier from '@/src/admin/data-binding/ModelNotifier/EditingPostId';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import EBGraphVis from '..';
import VisNetworkHandler from '@/src/VisNetworkWrapper/Attribute/Handler'
import EBEditorPopup from '../../EBEditorPopup';
import EBEditor from '../../EBEditorPopup/EBEditorPopupBody/EBEditor';
import EditingPost from '@/src/admin/data-binding/Model/EditingPost';

export default class Handler extends VisNetworkHandler {
  constructor () {
    super({
      eventName: 'doubleClick',
    });
  }

  async handle (params: any) {
    const graphVis = Static.instance.get<EBGraphVis>(SYMBOLS.EBGraphVis);
    const id = Number(graphVis.network.getNodeAt(params.pointer.DOM));
    if (id < 0) return;
    await Static.instance.get<EditingPostIdNotifier>(SYMBOLS.EditingPostIdNotifier).setId(id);
    Static.instance.get<EBEditor>(SYMBOLS.EBEditor).editor.setMarkdown(Static.instance.get<EditingPost>(SYMBOLS.EditingPost).data.body, false);
    Static.instance.get<EBEditorPopup>(SYMBOLS.EBEditorPopup).show();
  }
}
