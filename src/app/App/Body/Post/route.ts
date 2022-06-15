import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Inversified from './inversified';
import PostingPostId from '@/src/app/data-binding/Model/PostingPostId';
import axios from 'axios';
import PrevPosts from '@/src/app/data-binding/Model/PrevPosts';
import CommentList from './CommentList';
import CommentWriter from './CommentWriter';
import SetNotifier from '@/src/app/data-binding/Notifier/PostingPostComments/Set';
import Setter from '@/src/app/data-binding/Operator/PostingPostComments/Setter';
import AddNotifier from '@/src/app/data-binding/Notifier/PostingPostComments/Add';
import Adder from '@/src/app/data-binding/Operator/PostingPostComments/Adder';
import Getter from '@/src/app/data-binding/Operator/PostingPostComments/Getter';

@injectable()
export default class Route extends Inversified implements BeforeEnterObserver {
  setter: Setter;

  constructor (
    @inject(SYMBOLS.CommentListElement) commentList: CommentList,
    @inject(SYMBOLS.CommentWriterElement) commentWriter: CommentWriter,
    @inject(SYMBOLS.PostingPostCommentsSetNotifier) setNotifier: SetNotifier,
    @inject(SYMBOLS.PostingPostCommentsSetter) setter: Setter,
    @inject(SYMBOLS.PostingPostCommentsGetter) getter: Getter,
    @inject(SYMBOLS.PostingPostCommentsAddNotifier) addNotifier: AddNotifier,
  ) {
    super({
      commentList,
      commentWriter,
      setNotifier,
      addNotifier,
      getter,
    });
    this.setter = setter;
  }

  async onBeforeEnter (location: RouterLocation) {
    await Static.instance.get<PostingPostId>(SYMBOLS.PostingPostId).set(Number(location.params['id']));
    const prevPosts = (await axios.get('/api/post/getPrevPosts', { params: { id: Number(location.params['id']) } })).data.list;
    await Static.instance.get<PrevPosts>(SYMBOLS.PrevPosts).set(prevPosts);

    const comments = (await axios.get('/api/post/comment/getComments', { params: { postId: Number(location.params['id']) } })).data.list;
    await this.setter.set(comments.map((v: any) => ({ ...v, firstUpload: new Date(v.firstUpload) })));
  }
}

customElements.define('app-post-route', Route);
