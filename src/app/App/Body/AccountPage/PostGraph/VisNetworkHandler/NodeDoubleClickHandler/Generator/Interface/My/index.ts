import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraph from '../../../../..';
import EditingPostId from '@/src/app/data-binding/Model/EditingPostId';
import EditorPopup from '@/src/app/App/EditorPopup';

export default class MyInterface extends Interface<any, void> {
  async generate (params: any) {
    const graphVis = Static.instance.get<PostGraph>(SYMBOLS.PostGraphElement);
    const id = Number(graphVis.network.getNodeAt(params.pointer.DOM));
    if (id < 0 || isNaN(id)) return;
    await Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).set(id);
    Static.instance.get<EditorPopup>(SYMBOLS.EditorPopup).show();
  }
}
