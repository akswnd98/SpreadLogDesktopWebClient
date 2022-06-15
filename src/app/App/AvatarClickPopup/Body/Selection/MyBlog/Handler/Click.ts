import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import { Router } from '@vaadin/router';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({
      id: 'root',
    });
  }

  async handle (event: MouseEvent) {
    const nickname = Static.instance.get<AccountGetter>(SYMBOLS.AccountGetter).get().nickname;
    Router.go(`/account/${nickname}`);
  }
}
