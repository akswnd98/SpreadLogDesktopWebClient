import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({
      id: 'root',
    });
  }

  async handle (event: MouseEvent) {
    await axios.post('/api/account/email/logout');
    location.href = '/';
  }
}
