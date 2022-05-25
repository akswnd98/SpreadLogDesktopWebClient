import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/elements/EBAttribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import PostDate from '..';

export type ConstructorParam = {
  postDate: PostDate;
};

@injectable()
export default class MouseOver extends Handler<'mouseover'> {
  eventName: 'mouseover' = 'mouseover';

  postDate: PostDate;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      id: 'firstUpload',
    });
    this.postDate = payload.postDate;
  }

  async handle (event: MouseEvent) {
    this.postDate.showLastUpdate();
  }
}
