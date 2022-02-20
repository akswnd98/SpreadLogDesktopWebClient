import { UpdatePostRequest, UpdatePostResponse } from '@/common/api/post';
import EditingPostId from '@/src/admin/data-binding/Model/EditingPostId';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS } from '@/src/admin/types';
import Handler from '@/src/EBAttribute/Handler';
import axios, { AxiosResponse } from 'axios';
import EBEditor from '../../../EBEditor';
import EditorPostBodyTop from '@/src/admin/EBAdmin/EBEditorPopup/EBEditorPopupBody/Top';
import EditingPost from '@/src/admin/data-binding/Model/EditingPost';

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const body = Static.instance.get<EBEditor>(SYMBOLS.EBEditor).editor.getMarkdown();
    const title = (Static.instance.get<EditorPostBodyTop>(SYMBOLS.EditorPopupBodyTop).shadowRoot!.getElementById('input') as HTMLInputElement).value;
    const post = Static.instance.get<EditingPost>(SYMBOLS.EditingPost);
    post.data = { ...post.data, title, body };
    console.log(post.data);
    const id = Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).data.id;
    await axios.put<UpdatePostResponse, AxiosResponse<UpdatePostResponse>, UpdatePostRequest>('/api/post/updatePost', {
      id,
      title,
      body,
    }, {
      responseType: 'json',
    });
  }
}
