import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam<DataType> = {
  data: DataType;
};

@injectable()
export default class Model<DataType> {
  data: DataType;

  constructor (@unmanaged() payload: ConstructorParam<DataType>) {
    this.data = payload.data;
  }
}
