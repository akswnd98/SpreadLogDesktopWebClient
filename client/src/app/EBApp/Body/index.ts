import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '../../types';
import GraphVis from './GraphVis';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { Context, Router } from '@vaadin/router';
import EBElement from '@/src/EBElement';
import { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import BlogPost from './Post/route';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class Body extends EBElement {
  router: Router;

  constructor (
    @inject(SYMBOLS.GraphVis) graphVis: GraphVis,
    @inject(SYMBOLS.BlogPost) blogPost: BlogPost,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.router = new Router(this.rootElement);
    this.router.setRoutes([
      { path: '/', action: () => graphVis },
      {
        path: '/blog/:id',
        action: (context: Context) => blogPost,
      },
    ]);
  }
}

customElements.define('eb-app-body', Body);
