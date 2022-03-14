import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import { injectable } from 'inversify';
import { Router } from '@vaadin/router';

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
    Router.go('/');
  }
}
