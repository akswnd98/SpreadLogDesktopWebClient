import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import EditingPostIdNotifier from '../../Notifier/EditingPostId';
import { SYMBOLS } from '@/src/app/symbols';
import axios from 'axios';

export type DataType = {
  id: number;
};

@injectable()
export default class EditingPostId extends Model<DataType> {
  constructor () {
    super({
      data: {
        id: -1,
      },
    });
  }

  async get () {
    return this.data.id;
  }

  async set (id: number) {
    this.data.id = id;
    const post = (await axios.get('/api/post', { params: { id } })).data;
    Static.instance.get<EditingPostIdNotifier>(SYMBOLS.EditingPostIdNotifier).notify({
      ...post,
      firstUpload: new Date(post.firstUpload),
      lastUpdate: new Date(post.lastUpdate),
    });
  }
}
