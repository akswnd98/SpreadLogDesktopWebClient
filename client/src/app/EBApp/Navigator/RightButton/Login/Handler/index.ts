import Handler, { type ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor (payload: ParentConstructorParam) {
    super(payload);
  }

  async handle (event: HTMLElementEventMap['click']) {
    await axios.get(`/login/kakao/auth`);
  }
}
