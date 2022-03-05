import Handler from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import LoginPopup from '../../..';
import { SYMBOLS } from '@/src/app/types';


@injectable()
export default class ClickHandler extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle (event: HTMLElementEventMap['click']) {
    Static.instance.get<LoginPopup>(SYMBOLS.LoginPopup).hide();
  }
}
