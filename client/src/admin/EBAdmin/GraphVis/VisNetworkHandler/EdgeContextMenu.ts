import VisNetworkHandler from '@/src/VisNetworkWrapper/Attribute/Handler';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import EBGraphVis from '@/src/EBGraphVis';
import ContextMenuPopup from '../EdgeContextMenuPopup';
import EdgeContextMenuSelectedId from '@/src/data-binding/Model/EdgeContextMenuSelectedId'
import { SYMBOLS as BasicSYMBOLS } from '@/src/types';

export default class Handler extends VisNetworkHandler {
  eventName: 'oncontext' = 'oncontext';

  constructor () {
    super();
  }

  async handle (params: any) {
    const graphVis = Static.instance.get<EBGraphVis>(SYMBOLS.EBGraphVis);
    const id = graphVis.network.getEdgeAt(params.pointer.DOM);
    if (id === undefined) return;
    params.event.preventDefault();
    params.event.stopPropagation();
    Static.instance.get<EdgeContextMenuSelectedId>(SYMBOLS.EdgeContextMenuSelectedId).data.id = Number(id);
    const popup = Static.instance.get<ContextMenuPopup>(SYMBOLS.EdgeContextMenuPopup);
    popup.show({ x: params.event.x, y: params.event.y });
  }
}
