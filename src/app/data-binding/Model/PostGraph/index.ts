import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '@/src/owl-data-binding/Model';
import Node from './Node';
import Edge from './Edge';

export type DataType = {
  nodes: Map<number, Node>;
  edges: Map<number, Edge>;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class PostGraph extends Model<DataType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
  }
}
