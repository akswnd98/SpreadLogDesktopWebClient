import Handler from '@/src/owl-element/Attribute/Handler';

export default abstract class Input extends Handler<'input'> {
  eventName: 'input' = 'input';

  constructor () {
    super({
      id: 'input-box',
    });
  }
}
