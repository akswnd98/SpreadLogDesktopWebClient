import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostDate from '..';

export type ConstructorParam = {
  postDate: PostDate;
};

@injectable()
export default class MouseLeave extends Handler<'mouseleave'> {
  eventName: 'mouseleave' = 'mouseleave';

  postDate: PostDate;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      id: 'firstUpload',
    });
    this.postDate = payload.postDate;
  }

  async handle (event: MouseEvent) {
    this.postDate.hideLastUpdate();
  }
}
