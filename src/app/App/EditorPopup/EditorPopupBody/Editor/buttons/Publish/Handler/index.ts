import { UpdatePostRequest, UpdatePostResponse } from '@/common/api/post';
import EditingPostId from '@/src/app/data-binding/Model/EditingPostId';
import UpdateNode from '@/src/app/data-binding/Operator/PostGraph/UpdateNode';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler from '@/src/owl-element/Attribute/Handler';
import axios, { AxiosResponse } from 'axios';
import Editor from '../../..';
import EditorPopupBody from '../../../..';

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const id = await Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).get();
    const editorPopupBody = Static.instance.get<EditorPopupBody>(SYMBOLS.EditorPopupBody);
    const title = (editorPopupBody.titleElement.shadowRoot!.getElementById('input') as HTMLInputElement).value;
    const body = editorPopupBody.editorElement.editor.getValue();
    await axios.post('/api/post/account/publish', { id, title, body });
    await Static.instance.get<UpdateNode>(SYMBOLS.PostGraphUpdateNode).update({ id, title });
  }
}
