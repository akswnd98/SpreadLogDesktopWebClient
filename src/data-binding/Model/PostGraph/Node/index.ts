import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '../..';

export type DataType = {
  id: number;
  title: string;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class Node extends Model<DataType> {
  constructor (payload: ConstructorParam) {
    super(payload);
  }
}
