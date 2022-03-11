import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/types';
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import { injectable } from 'inversify';
import Inversified from './inversified';
import PostingId from '@/src/app/data-binding/Model/PostingId';

@injectable()
export default class Route extends Inversified implements BeforeEnterObserver {
  async onBeforeEnter (location: RouterLocation) {
    await Static.instance.get<PostingId>(SYMBOLS.PostingId).setData({ id: Number(location.params['id']) });
  }
}

customElements.define('eb-app-post-route', Route);
