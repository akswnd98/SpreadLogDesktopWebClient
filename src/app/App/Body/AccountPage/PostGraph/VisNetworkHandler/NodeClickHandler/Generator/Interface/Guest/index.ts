import PostingPostId from '@/src/app/data-binding/Model/PostingPostId';
import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraph from '../../../../..';

export default class GuestInterface extends Interface<any, void> {
  async generate (params: any) {
    const graphVis = Static.instance.get<PostGraph>(SYMBOLS.PostGraphElement);
    const id = Number(graphVis.network.getNodeAt(params.pointer.DOM));
    if (id < 0 || isNaN(id)) return;
    location.href = `/post/${id}`;
  }
}
