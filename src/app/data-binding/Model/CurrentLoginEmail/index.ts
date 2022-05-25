import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  email: string;
};

@injectable()
export default class CurrentLoginEmail extends Model<DataType> {
  constructor () {
    super({
      data: {
        email: '',
      },
    });
  }
}
