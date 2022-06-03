import IObserver from '@/src/data-binding/IObserver';
import PostingPostModel, { DataType } from '@/src/app/data-binding/Model/PostingPost';
import PostingPostNotifier from '../../ModelNotifier/PostingPost';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Navigator from '@/src/app/App/Navigator';
import Getter from '../../Operator/AccountPageNickname/Getter';

@injectable()
export default class NavLogoObserver implements IObserver {
  async update () {
    const logo = Static.instance.get<Navigator>(SYMBOLS.AppNavigator).logo;
    const nickname = Static.instance.get<Getter>(SYMBOLS.AccountPageNicknameGetter).get();
    logo.rootElement.innerHTML = `${nickname}.Log`;
  }
}
