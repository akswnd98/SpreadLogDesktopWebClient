import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  nickname: string;
};

@injectable()
export default class CurrentSignUpNickname extends Model<DataType> {
  constructor () {
    super({
      data: {
        nickname: '',
      },
    });
  }
}
