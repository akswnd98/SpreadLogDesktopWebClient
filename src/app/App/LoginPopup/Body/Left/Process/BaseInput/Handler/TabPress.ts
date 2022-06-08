import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export default class TabPressHandler extends Handler<'keydown'> {
  eventName: 'keydown' = 'keydown';

  constructor () {
    super({
      id: 'input-box',
    });
  }

  async handle (event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
