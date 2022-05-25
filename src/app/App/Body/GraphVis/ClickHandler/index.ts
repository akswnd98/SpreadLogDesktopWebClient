import Handler from '@/src/VisNetworkWrapper/Attribute/Handler';
import Static from '@/src/app/inversify.config';
import GraphVis from '..';
import { SYMBOLS } from '@/src/app/types';
import PostingId from '@/src/app/data-binding/Model/PostingId';
import { Router } from '@vaadin/router';

export default class ClickHandler extends Handler {
  eventName: 'click' = 'click';

  async handle (params: any) {
    const graphVis = Static.instance.get<GraphVis>(SYMBOLS.GraphVis);
    const id = Number(graphVis.network.getNodeAt(params.pointer.DOM));
    if (id < 0 || isNaN(id)) return;
    Router.go(`/blog/${id}`);
  }
}
