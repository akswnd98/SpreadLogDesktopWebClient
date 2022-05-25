import 'reflect-metadata';
import { injectable } from 'inversify';
import Model from '..';

export type DataType = {
  id: number;
};

@injectable()
export default class SelectedId extends Model<DataType> {
  constructor () {
    super({
      data: {
        id: -1,
      },
    });
  }
}
