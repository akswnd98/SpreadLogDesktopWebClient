import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '../../symbols';
// import GraphVis from './GraphVis';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { Context, Router } from '@vaadin/router';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import AccountPage from './AccountPage/route';
// import BlogPost from './Post/route';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class Body extends Element {
  router: Router;

  constructor (
    // @inject(SYMBOLS.GraphVis) graphVis: GraphVis,
    // @inject(SYMBOLS.BlogPost) blogPost: BlogPost,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.router = new Router(this.rootElement);
    this.router.setRoutes([
      { path: '/account/:nickname', action: () => new AccountPage() }
    ]);
    // this.router.setRoutes([
    //   { path: '/', action: () => graphVis },
    //   {
    //     path: '/blog/:id',
    //     action: (context: Context) => blogPost,
    //   },
    // ]);
  }
}

customElements.define('app-body', Body);
