import Handler from '@/src/VisNetworkWrapper/Attribute/Handler';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostingId from '@/src/app/data-binding/Model/PostingId';
import { Router } from '@vaadin/router';
import ContextMenuPopup from '@/src/elements/ContextMenuPopup';
import PostGraphElement from '../..';
import Setter from '@/src/app/data-binding/Operator/NodeContextMenuSelectedId/Setter';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import AccountPageNicknameGetter from '@/src/app/data-binding/Operator/AccountPageNickname/Getter';
import Generator from './Generator';

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
    const accountPageNickname = Static.instance.get<AccountPageNicknameGetter>(SYMBOLS.AccountPageNicknameGetter).get();
    const account = Static.instance.get<AccountGetter>(SYMBOLS.AccountGetter).get();
    const generated = (new Generator()).generate({ account, accountPageNickname });
    if (generated !== undefined) {
      popup.show({ x: params.event.x, y: params.event.y }, generated);
    }
  }
}
