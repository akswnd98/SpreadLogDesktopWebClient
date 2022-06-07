import Model from '@/src/data-binding/Model';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import PostingPostNotifier from '../../Notifier/PostingPost';

export type DataType = {
  id: number;
  title: string;
  body: string;
  firstUpload: Date;
  lastUpdate: Date;
};

@injectable()
export default class PostingPost extends Model<DataType> {
  notifier: PostingPostNotifier;

  constructor (
    @inject(SYMBOLS.PostingPostNotifier) notifier: PostingPostNotifier,
  ) {
    super({
      data: {
        id: -1,
        title: '',
        body: '',
        firstUpload: new Date(),
        lastUpdate: new Date(),
      },
    });
    this.notifier = notifier;
  }

  async set (data: DataType) {
    this.data = data;
    await this.notifier.notify(data)
  }
}
