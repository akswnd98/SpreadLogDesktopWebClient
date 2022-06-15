import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { Router } from '@vaadin/router';

export type ConstructorParam = {
  id: number;
};

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';
  postId: number;

  constructor (payload: ConstructorParam) {
    super({ id: 'root' });
    this.postId = payload.id;
  }

  async handle (event: MouseEvent) {
    Router.go(`/post/${this.postId}`);
  }
}
