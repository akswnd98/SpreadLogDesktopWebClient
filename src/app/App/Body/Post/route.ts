import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Inversified from './inversified';
import PostingPostId from '@/src/app/data-binding/Model/PostingPostId';
import axios from 'axios';
import PrevPosts from '@/src/app/data-binding/Model/PrevPosts';

@injectable()
export default class Route extends Inversified implements BeforeEnterObserver {
  async onBeforeEnter (location: RouterLocation) {
    await Static.instance.get<PostingPostId>(SYMBOLS.PostingPostId).set(Number(location.params['id']));
    const ret = (await axios.get('/api/post/getPrevPosts', { params: { id: Number(location.params['id']) } })).data.list;
    await Static.instance.get<PrevPosts>(SYMBOLS.PrevPosts).set(ret);
  }
}

customElements.define('app-post-route', Route);
