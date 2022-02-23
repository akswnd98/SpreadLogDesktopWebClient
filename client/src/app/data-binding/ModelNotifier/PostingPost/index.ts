import ModelNotifier from '@/src/data-binding/ModelNotifier';
import PostingPostModel, { DataType } from '../../Model/PostingPost';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/types';
import BlogPostObserver from '../../Observer/BlogPost';

@injectable()
export default class PostingPost extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.PostingPost) model: PostingPostModel,
    @inject(SYMBOLS.BlogPostObserver) observer: BlogPostObserver,
  ) {
    super({
      model,
    });
    this.attachObserver(observer);
  }

  async notify (event: DataType) {
    await super.notify(event);
  }

  async setData (data: DataType) {
    this.model.data = data;
    await this.notify(data);
  }
}
