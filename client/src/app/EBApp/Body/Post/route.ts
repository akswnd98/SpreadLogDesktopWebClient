import PostingId from '@/src/app/data-binding/ModelNotifier/PostingId';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/types';
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import { injectable } from 'inversify';
import Post from '.';

@injectable()
export default class Route extends Post implements BeforeEnterObserver {
  async onBeforeEnter (location: RouterLocation) {
    await Static.instance.get<PostingId>(SYMBOLS.PostingIdNotifier).setId(Number(location.params['id']));
  }
}

customElements.define('eb-app-post-route', Route);
