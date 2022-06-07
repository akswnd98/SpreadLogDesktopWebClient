import ModelNotifier from '@/src/data-binding/ModelNotifier';
import PostingPostModel, { DataType } from '../../Model/PostingPost';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPostTitleObserver from '../../Observer/PostingPost/Title';
import PostingPostDateObserver from '../../Observer/PostingPost/Date';
import PostingPostBodyObserver from '../../Observer/PostingPost/Body';
import Model from '@/src/data-binding/Model';

@injectable()
export default class PostingPost extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.PostingPost) model: PostingPostModel,
    @inject(SYMBOLS.PostingPostTitleObserver) titleObserver: PostingPostTitleObserver,
    @inject(SYMBOLS.PostingPostDateObserver) dateObserver: PostingPostDateObserver,
    @inject(SYMBOLS.PostingPostBodyObserver) bodyObserver: PostingPostBodyObserver,
  ) {
    super({
      model,
      observers: new Set([
        titleObserver,
        dateObserver,
        bodyObserver,
      ]),
    });
  }

  async set (data: DataType) {
    this.model.data = data;
    await this.notify(this.model);
  }

  protected async notify (event: Model<DataType>) {
    await super.notify(event);
  }
}
