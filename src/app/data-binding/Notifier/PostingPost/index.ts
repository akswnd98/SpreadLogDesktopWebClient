import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import PostingPostTitleObserver from '../../Observer/PostingPost/Title';
import PostingPostDateObserver from '../../Observer/PostingPost/Date';
import PostingPostBodyObserver from '../../Observer/PostingPost/Body';
import Notifier from '@/src/owl-data-binding/Notifier';
import PostingPostModel, { DataType } from '../../Model/PostingPost';

@injectable()
export default class PostingPostNotifier extends Notifier {
  constructor () {
    super({
      observers: new Set([
        new PostingPostTitleObserver(),
        new PostingPostBodyObserver(),
        new PostingPostDateObserver(),
      ]),
    });
  }

  async notify (event: DataType) {
    await super.notify(event);
  }
}
