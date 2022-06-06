import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraph from '../..';
import VisNetworkHandler from '@/src/VisNetworkWrapper/Attribute/Handler'
import EditorPopup from '@/src/app/App/EditorPopup';
import EditingPostId from '@/src/app/data-binding/Model/EditingPostId';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import PageNicknameGetter from '@/src/app/data-binding/Operator/AccountPageNickname/Getter';

export default class Handler extends VisNetworkHandler {
  eventName: 'doubleClick' = 'doubleClick';

  constructor () {
    super();
  }

  async handle (params: any) {
    const account = Static.instance.get<AccountGetter>(SYMBOLS.AccountGetter).get();
    const accountPageNickname = Static.instance.get<PageNicknameGetter>(SYMBOLS.AccountPageNicknameGetter).get();
    if (!(account.isLoggedIn && account.nickname === accountPageNickname)) return;
    const graphVis = Static.instance.get<PostGraph>(SYMBOLS.PostGraphElement);
    const id = Number(graphVis.network.getNodeAt(params.pointer.DOM));
    if (id < 0) return;
    await Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).set(id);
    Static.instance.get<EditorPopup>(SYMBOLS.EditorPopup).show();
  }
}
