import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import LoginPopup from '../../..';
import { SYMBOLS } from '@/src/app/symbols';
import LoginPopupCommandStacker from '@/src/app/data-binding/CommandStacker/LoginPopup';

@injectable()
export default class ClickHandler extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const stacker = Static.instance.get<LoginPopupCommandStacker>(SYMBOLS.LoginPopupCommandStacker);
    await stacker.undo();
  }
}
