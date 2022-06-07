import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Inversified from './inversified';
import PostingPostId from '@/src/app/data-binding/Model/PostingPostId';

@injectable()
export default class Route extends Inversified implements BeforeEnterObserver {
  async onBeforeEnter (location: RouterLocation) {
    await Static.instance.get<PostingPostId>(SYMBOLS.PostingPostId).set(Number(location.params['id']));
  }
}

customElements.define('app-post-route', Route);
