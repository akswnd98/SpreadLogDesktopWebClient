import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '@/src/owl-data-binding/Model';
import InitialPostNodes, { type NodeType } from '../../DataStruct/InitialPostNodes';
import InitialPostEdges, { type EdgeType } from '../../DataStruct/InitialPostEdges';

export type DataType = {
  nodes: Map<number, NodeType>;
  edges: Map<number, EdgeType>;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class PostGraph extends Model<DataType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
  }
}
