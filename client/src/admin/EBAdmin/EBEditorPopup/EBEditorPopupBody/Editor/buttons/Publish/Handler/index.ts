import { UpdatePostRequest, UpdatePostResponse } from '@/common/api/post';
import EditingPostId from '@/src/admin/data-binding/Model/EditingPostId';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import Handler from '@/src/EBAttribute/Handler';
import axios, { AxiosResponse } from 'axios';
import EBEditor from '../../..';
import EditingPost from '@/src/admin/data-binding/Model/EditingPost';
import EBEditorPopupBody from '../../../..';
import ChangeNodeTitle from '@/src/data-binding/ModelNotifier/PostGraph/ChangeNodeTitle';

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const body = Static.instance.get<EBEditor>(SYMBOLS.EBEditor).editor.getValue();
    const title = (Static.instance.get<EBEditorPopupBody>(SYMBOLS.EBEditorPopupBody).titleElement.shadowRoot!.getElementById('input') as HTMLInputElement).value;
    const post = Static.instance.get<EditingPost>(SYMBOLS.EditingPost);
    post.data = { ...post.data, title, body };
    const id = Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).data.id;
    console.log(id, title, body);
    console.log(await (await axios.put('/api/post/test', {
      id: '123sd',
    })).data);
    await axios.put<UpdatePostResponse, AxiosResponse<UpdatePostResponse>, UpdatePostRequest>('/api/post/updatePost', {
      id,
      title,
      body,
    }, {
      responseType: 'json',
    });
    await Static.instance.get<ChangeNodeTitle>(SYMBOLS.PostGraphChangeNodeTitleNotifier).changeTitle(id, title);
  }
}
