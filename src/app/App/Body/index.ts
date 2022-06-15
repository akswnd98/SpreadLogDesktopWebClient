import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '../../symbols';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { Context, Router } from '@vaadin/router';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import AccountPageElement from './AccountPage/route';
import PostPageElement from './Post/route';
import FrontPage from './FrontPage';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class Body extends Element {
  router: Router;

  constructor (
    @inject(SYMBOLS.AccountPageElement) accountPageElement: AccountPageElement,
    @inject(SYMBOLS.PostPageElement) postPageElement: PostPageElement,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.router = new Router(this.rootElement);
    this.router.setRoutes([
      { path: '/', action: () => new FrontPage() },
      { path: '/account/:nickname', action: () => accountPageElement },
      { path: '/post/:id', action: (context: Context) => postPageElement },
    ]);
  }
}

customElements.define('app-body', Body);
