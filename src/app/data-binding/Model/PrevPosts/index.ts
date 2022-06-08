import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PrevPostsNotifier from '../../Notifier/PrevPosts';

export type MetadataType = {
  id: number;
  title: string;
};

export type DataType = {
  list: MetadataType[];
};

@injectable()
export default class PrevPosts extends Model<DataType> {
  notifier: PrevPostsNotifier;

  constructor () {
    super({
      data: {
        list: [],
      },
    });
    this.notifier = new PrevPostsNotifier();
  }

  get () {
    return this.data;
  }

  async set (list: MetadataType[]) {
    this.data.list = list;
    await this.notifier.notify(undefined);
  }
}
