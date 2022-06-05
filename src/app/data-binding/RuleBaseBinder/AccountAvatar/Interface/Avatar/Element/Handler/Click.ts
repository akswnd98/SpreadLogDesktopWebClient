import LoginPopup from '@/src/app/App/LoginPopup';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import { Router } from '@vaadin/router';
import { injectable } from 'inversify';

export type ConstructorParam = {
  nickname: string;
};

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  nickname: string;

  constructor (payload: ConstructorParam) {
    super({
      id: 'root',
    });
    this.nickname = payload.nickname;
  }

  async handle (event: HTMLElementEventMap['click']) {
    location.href = `/account/${this.nickname}`;
  }
}
