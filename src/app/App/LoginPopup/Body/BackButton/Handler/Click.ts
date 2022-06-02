import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import UndoLastCommand from '@/src/app/data-binding/Operator/LoginPopup/LoginProcessChain/UndoLastCommand';
import StateGetter from '@/src/app/data-binding/Operator/LoginPopup/StateGetter';

@injectable()
export default class ClickHandler extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    const getter = Static.instance.get<StateGetter>(SYMBOLS.LoginPopupStateGetter);
    await getter.get().back();
  }
}
