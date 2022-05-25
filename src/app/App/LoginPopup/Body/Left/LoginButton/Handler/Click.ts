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
  }
}
