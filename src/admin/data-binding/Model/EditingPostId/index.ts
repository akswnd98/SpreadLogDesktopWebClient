import Model from '@/src/data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  id: number;
};

@injectable()
export default class EditingPostId extends Model<DataType> {
  constructor () {
    super({
      data: {
        id: -1,
      },
    });
  }
}
