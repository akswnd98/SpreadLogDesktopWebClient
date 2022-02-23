import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostingIdNotifier from '../../ModelNotifier/PostingId';
import axios, { AxiosResponse } from 'axios';
import { GetByIdRequest, GetByIdResponse } from '@/common/api/post';
import Static from '@/src/app/inversify.config';
import PostingPostNotifier from '../../ModelNotifier/PostingPost';
import { SYMBOLS } from '@/src/app/types';

@injectable()
export default class PostingPost implements IObserver {
  async update (subject: PostingIdNotifier, event: number) {
    const ret = await axios.get<GetByIdResponse, AxiosResponse<GetByIdResponse>, GetByIdRequest>('/api/post/getById', {
      params: {
        id: event,
      },
      responseType: 'json',
    });
    await Static.instance.get<PostingPostNotifier>(SYMBOLS.PostingPostNotifier).setData(ret.data.ret);
  }
}
