import AvatarClickPopup from '@/src/app/App/AvatarClickPopup';
import LoginPopup from '@/src/app/App/LoginPopup';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import { Router } from '@vaadin/router';
import { injectable } from 'inversify';
import AvatarElement from '..';

export type ConstructorParam = {
  avatarElement: AvatarElement;
};

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  avatarElement: AvatarElement;

  constructor (payload: ConstructorParam) {
    super({
      id: 'root',
    });
    this.avatarElement = payload.avatarElement;
  }

  async handle (event: HTMLElementEventMap['click']) {
    if (!this.avatarElement.isShowed) {
      Static.instance.get<AvatarClickPopup>(SYMBOLS.AvatarClickPopup).show();
      event.stopPropagation();
    }
    this.avatarElement.isShowed = !this.avatarElement.isShowed;
  }
}
