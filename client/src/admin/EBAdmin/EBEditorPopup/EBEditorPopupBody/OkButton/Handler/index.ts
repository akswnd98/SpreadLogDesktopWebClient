import { UpdatePostRequest, UpdatePostResponse } from '@/common/api/post';
import EditingPostId from '@/src/admin/data-binding/Model/EditingPostId';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import Handler from '@/src/EBAttribute/Handler';
import axios, { AxiosResponse } from 'axios';
import EBEditor from '../../EBEditor';

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const md = Static.instance.get<EBEditor>(SYMBOLS.EBEditor).editor.getMarkdown();
    const id = Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).data.id;
    await axios.put<UpdatePostResponse, AxiosResponse<UpdatePostResponse>, UpdatePostRequest>('/api/post/updatePost', {
      id,
      body: md,
    }, {
      responseType: 'json',
    });
  }
}
