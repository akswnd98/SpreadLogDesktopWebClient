import WindowHandler from '@/src/owl-element/Attribute/WindowHandler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import AvatarClickPopup from '../../../../../../../../App/AvatarClickPopup';
import { SYMBOLS } from '@/src/app/symbols';
import AvatarElement from '..';

export type ConstructorParam = {
  avatarElement: AvatarElement;
};

@injectable()
export default class Click extends WindowHandler<'click'> {
  eventName: 'click' = 'click';

  avatarElement: AvatarElement;

  constructor (payload: ConstructorParam) {
    super();
    this.avatarElement = payload.avatarElement;
  }

  async handle () {
    Static.instance.get<AvatarClickPopup>(SYMBOLS.AvatarClickPopup).hide();
    this.avatarElement.isShowed = false;
  }
}
