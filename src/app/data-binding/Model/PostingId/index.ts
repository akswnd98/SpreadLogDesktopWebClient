import Model from '@/src/data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import PostingPostNotifier from '../../ModelNotifier/PostingPost';
import { SYMBOLS } from '@/src/app/types';
import axios, { AxiosResponse } from 'axios';
import { GetByIdRequest, GetByIdResponse } from '@/common/api/post';

export type DataType = {
  id: number;
};

@injectable()
export default class PostingId extends Model<DataType> {
  constructor () {
    super({
      data: {
        id: -1,
      },
    });
  }

  async setData (data: DataType) {
    this.data = data;
    const ret = await axios.get<GetByIdResponse, AxiosResponse<GetByIdResponse>, GetByIdRequest>('/api/post/getById', {
      params: {
        id: data.id,
      },
      responseType: 'json',
    });
    await Static.instance.get<PostingPostNotifier>(SYMBOLS.PostingPostNotifier).setData({
      ...ret.data.ret,
      firstUpload: new Date(ret.data.ret.firstUpload),
      lastUpdate: new Date(ret.data.ret.lastUpdate),
    });
  }
}
