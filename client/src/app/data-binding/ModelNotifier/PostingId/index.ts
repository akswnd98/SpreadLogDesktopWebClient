import ModelNotifier from '@/src/data-binding/ModelNotifier';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import PostingIdModel, { DataType } from '../../Model/PostingId';
import PostingPostObserver from '../../Observer/PostingPost';
import { SYMBOLS } from '@/src/app/types';

@injectable()
export default class PostingId extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.PostingId) model: PostingIdModel,
    @inject(SYMBOLS.PostingPostObserver) observer: PostingPostObserver,
  ) {
    super ({
      model,
    });
    this.attachObserver(observer);
  }

  async notify (event: number) {
    await super.notify(event);
  }

  async setId (id: number) {
    this.model.data.id = id;
    await this.notify(id);
  }
}
