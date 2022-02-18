import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import EditingPostIdNotifier from '../../ModelNotifier/EditingPostId';
import axios, { AxiosResponse } from 'axios';
import { GetByIdRequest, GetByIdResponse } from '@/common/api/post';

@injectable()
export default class EditingPostId implements IObserver {
  async update (subject: EditingPostIdNotifier, event: number) {
    console.log(event);
    const ret = await axios.get<GetByIdResponse, AxiosResponse<GetByIdResponse>, GetByIdRequest>('/api/post/getById', {
      params: {
        id: event,
      },
      responseType: 'json',
    });
    console.log(ret);
  }
}
