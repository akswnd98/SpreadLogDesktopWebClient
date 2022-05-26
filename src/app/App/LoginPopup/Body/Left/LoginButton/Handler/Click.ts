import BaseToPasswd from '@/src/app/data-binding/Command/Undoable/LoginPopup/BaseToPasswd';
import LoginPopupCommandStacker from '@/src/app/data-binding/CommandStacker/LoginPopup';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import { injectable } from 'inversify';
import Left from '../..';

export type ConstructorParam = {
  left: Left;
};

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';
  left: Left;

  constructor (payload: ConstructorParam) {
    super({
      id: 'root',
    });
    this.left = payload.left;
  }

  async handle (event: HTMLElementEventMap['click']) {
    const stacker = Static.instance.get<LoginPopupCommandStacker>(SYMBOLS.LoginPopupCommandStacker);
    await stacker.receiveCommand(new BaseToPasswd({ left: this.left }));
  }
}
