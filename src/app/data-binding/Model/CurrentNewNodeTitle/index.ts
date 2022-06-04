import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  title: string;
};

@injectable()
export default class CurrentNewNodeTitle extends Model<DataType> {
  constructor () {
    super({
      data: {
        title: '',
      },
    });
  }
}
