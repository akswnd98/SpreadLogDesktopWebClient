import Handler from '@/src/VisNetworkWrapper/Attribute/Handler';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostingId from '@/src/app/data-binding/Model/PostingId';
import { Router } from '@vaadin/router';
import ContextMenuBody from './ContextMenuBody';
import ContextMenuPopup from '@/src/elements/ContextMenuPopup';
import PostGraphElement from '../..';
import Setter from '@/src/app/data-binding/Operator/NodeContextMenuSelectedId/Setter';

export default class ContextMenuHandler extends Handler {
  eventName: 'oncontext' = 'oncontext';

  async handle (params: any) {
    const postGraph = Static.instance.get<PostGraphElement>(SYMBOLS.PostGraphElement);
    const id = postGraph.network.getNodeAt(params.pointer.DOM);
    if (id === undefined) return;
    params.event.preventDefault();
    params.event.stopPropagation();
    Static.instance.get<Setter>(SYMBOLS.NodeContextMenuSelectedIdSetter).set(Number(id));
    const popup = Static.instance.get<ContextMenuPopup>(SYMBOLS.ContextMenuPopup);
    popup.show({ x: params.event.x, y: params.event.y }, new ContextMenuBody());
  }
}
