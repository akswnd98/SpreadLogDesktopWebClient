import Handler from '@/src/VisNetworkWrapper/Attribute/Handler';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostingId from '@/src/app/data-binding/Model/PostingId';
import { Router } from '@vaadin/router';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostGraphElement from '../..';
import ContextMenuBody from './Generator/Interface/My/Element';
import ContextMenuPopup from '@/src/elements/ContextMenuPopup';
import Setter from '@/src/app/data-binding/Operator/EdgeContextMenuSelectedId/Setter';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import AccountPageNicknameGetter from '@/src/app/data-binding/Operator/AccountPageNickname/Getter';
import Generator from './Generator';

@injectable()
export default class ContextMenuHandler extends Handler {
  eventName: 'oncontext' = 'oncontext';

  async handle (params: any) {
    const graphVis = Static.instance.get<PostGraphElement>(SYMBOLS.PostGraphElement);
    const id = graphVis.network.getEdgeAt(params.pointer.DOM);
    if (id === undefined || graphVis.network.getNodeAt(params.pointer.DOM) !== undefined) return;
    params.event.preventDefault();
    params.event.stopPropagation();
    Static.instance.get<Setter>(SYMBOLS.EdgeContextMenuSelectedIdSetter).set(Number(id));
    const popup = Static.instance.get<ContextMenuPopup>(SYMBOLS.ContextMenuPopup);
    const accountPageNickname = Static.instance.get<AccountPageNicknameGetter>(SYMBOLS.AccountPageNicknameGetter).get();
    const account = Static.instance.get<AccountGetter>(SYMBOLS.AccountGetter).get();
    const generated = (new Generator()).generate({ account, accountPageNickname });
    if (generated !== undefined) {
      popup.show({ x: params.event.x, y: params.event.y }, generated);
    }
  }
}
