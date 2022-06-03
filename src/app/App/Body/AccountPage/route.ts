import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import 'reflect-metadata';
import { injectable } from 'inversify';
import AccountPage from '.';
import Static from '@/src/app/inversify.config';
import Setter from '@/src/app/data-binding/Operator/AccountPageNickname/Setter';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Route extends AccountPage implements BeforeEnterObserver {
  async onBeforeEnter (location: RouterLocation) {
    const nickname = location.params['nickname'];
    if (typeof nickname !== 'string') return;
    this.nickname = nickname;
    Static.instance.get<Setter>(SYMBOLS.AccountPageNicknameSetter).set(nickname);
  }
}

customElements.define('app-body-account-page-route', Route);
