import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '..';
import Node from './Node';

export type DataType = {
  nodes: Set<Node>;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class PostGraph extends Model<DataType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
  }
}
