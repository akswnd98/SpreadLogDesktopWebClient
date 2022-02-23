import VisNetworkHandler from '@/src/VisNetworkWrapper/Attribute/Handler';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import EBGraphVis from '@/src/EBGraphVis';
import PostGraph from '@/src/data-binding/Model/PostGraph';
import ContextMenuPopup from '../NodeContextMenuPopup';
import DeleteSelection from '../NodeContextMenuPopup/DeleteSelection';
import NodeContextMenuSelectedId from '@/src/data-binding/Model/NodeContextMenuSelectedId';

export default class Handler extends VisNetworkHandler {
  eventName: 'oncontext' = 'oncontext';

  constructor () {
    super();
  }

  async handle (params: any) {
    const graphVis = Static.instance.get<EBGraphVis>(SYMBOLS.EBGraphVis);
    const id = graphVis.network.getNodeAt(params.pointer.DOM);
    if (id === undefined) return;
    params.event.preventDefault();
    params.event.stopPropagation();
    const popup = Static.instance.get<ContextMenuPopup>(SYMBOLS.NodeContextMenuPopup);
    const model = Static.instance.get<NodeContextMenuSelectedId>(SYMBOLS.NodeContextMenuSelectedId);
    model.data.id = Number(id);
    popup.show({ x: params.event.x, y: params.event.y });
  }
}
