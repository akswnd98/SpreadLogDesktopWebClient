import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import EditingPostIdNotifier from '../../ModelNotifier/EditingPostId';
import axios, { AxiosResponse } from 'axios';
import { GetByIdRequest, GetByIdResponse } from '@/common/api/post';
import Static from '@/src/admin/inversify.config';
import EditingPost from '../../Model/EditingPost';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class EditingPostId implements IObserver {
  async update (subject: EditingPostIdNotifier, event: number) {
    const ret = await axios.get<GetByIdResponse, AxiosResponse<GetByIdResponse>, GetByIdRequest>('/api/post/getById', {
      params: {
        id: event,
      },
      responseType: 'json',
    });
    Static.instance.get<EditingPost>(SYMBOLS.EditingPost).data = ret.data.ret;
  }
}
