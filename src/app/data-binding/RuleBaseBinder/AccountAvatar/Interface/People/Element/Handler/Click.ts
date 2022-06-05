import LoginPopup from '@/src/app/App/LoginPopup';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import { injectable } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({
      id: 'root',
    });
  }

  async handle (event: HTMLElementEventMap['click']) {
    const popup = Static.instance.get<LoginPopup>(SYMBOLS.LoginPopup);
    popup.show();
  }
}
