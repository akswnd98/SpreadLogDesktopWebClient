import 'reflect-metadata';
import { injectable } from 'inversify';
import Handler from '@/src/owl-element/Attribute/Handler';
import Static from '@/src/app/inversify.config';
import EditorPopup from '../../../../..';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const popup = Static.instance.get<EditorPopup>(SYMBOLS.EditorPopup);
    popup.hide();
  }
}
