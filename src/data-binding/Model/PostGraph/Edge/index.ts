import 'reflect-metadata';
import { injectable } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '../..';

export type DataType = {
  id: number;
  fromId: number;
  toId: number;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class Edge extends Model<DataType> {
  constructor (payload: ConstructorParam) {
    super(payload);
  }
}
