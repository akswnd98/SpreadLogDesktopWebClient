import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type ConstructorParam = {
} & DataType;

export type DataType = {
  isLoggedIn: boolean;
  id: number;
  nickname: string;
};

@injectable()
export default class Account extends Model<DataType> {
  constructor (payload: ConstructorParam) {
    super({
      data: {
        ...payload,
      },
    });
  }
}
