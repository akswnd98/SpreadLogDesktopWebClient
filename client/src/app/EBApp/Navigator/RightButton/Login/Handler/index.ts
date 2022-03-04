import Handler, { type ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';
import Static from '@/src/app/inversify.config';
import LoginPopup from '@/src/app/EBApp/LoginPopup';
import { SYMBOLS } from '@/src/app/types';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor (payload: ParentConstructorParam) {
    super(payload);
  }

  async handle (event: HTMLElementEventMap['click']) {
    Static.instance.get<LoginPopup>(SYMBOLS.LoginPopup).show();
  }
}
