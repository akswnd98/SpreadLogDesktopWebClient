import 'reflect-metadata';
import { injectable } from 'inversify';
import Handler from '@/src/elements/EBAttribute/Handler';
import Static from '@/src/admin/inversify.config';
import EBEditorPopup from '../../../..';
import { SYMBOLS } from '@/src/admin/types';
import EditingPost from '@/src/admin/data-binding/Model/EditingPost';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const popup = Static.instance.get<EBEditorPopup>(SYMBOLS.EBEditorPopup);
    popup.hide();
  }
}
