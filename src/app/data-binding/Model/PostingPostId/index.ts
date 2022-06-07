import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostingPostNotifier from '../../Notifier/PostingPost';
import axios, { AxiosResponse } from 'axios';

export type DataType = {
  id: number;
};

@injectable()
export default class PostingPostId extends Model<DataType> {
  notifier: PostingPostNotifier;

  constructor () {
    super({
      data: {
        id: -1,
      },
    });
    this.notifier = new PostingPostNotifier();
  }

  get () {
    return this.data.id;
  }

  async set (id: number) {
    this.data.id = id;
    const ret = (await axios.get('/api/post', {
      params: { id },
      responseType: 'json',
    })).data;
    this.notifier.notify({
      ...ret,
      firstUpload: new Date(ret.firstUpload),
      lastUpdate: new Date(ret.lastUpdate),
    });
  }
}
