import Static from '@/src/app/inversify.config';
import Handler from '@/src/owl-element/Attribute/Handler';
import axios, { AxiosResponse } from 'axios';
import { SYMBOLS } from '@/src/app/symbols';
import EditingPostId from '@/src/admin/data-binding/Model/EditingPostId';
import { UploadResponse } from '@/common/api/image';
import Editor from '../../..';

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({
      id: 'root',
    });
  }

  async handle (event: MouseEvent) {
    const fileElement = document.createElement('input')!;
    fileElement.type = 'file';
    fileElement.name = 'file';
    fileElement.click();
    await new Promise<void>((res) => {
      fileElement.addEventListener('change', () => {
        res();
      });
    });
    if (fileElement.files === null) return;
    const formData = new FormData();
    formData.append('file', fileElement.files[0]);
    formData.append('postId', Static.instance.get<EditingPostId>(SYMBOLS.EditingPostId).data.id.toString());
    const ret = await axios.post<UploadResponse, AxiosResponse<UploadResponse>, any>('/api/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const editor = Static.instance.get<Editor>(SYMBOLS.EBEditor).editor;
    editor.replaceRange(`![title](${ret.data.ret.url})`, editor.getCursor());
    editor.refresh();
  }
}
