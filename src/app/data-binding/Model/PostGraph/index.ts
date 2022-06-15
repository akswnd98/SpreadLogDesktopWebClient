import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { ConstructorParam as ParentConstructorParam } from '@/src/owl-data-binding/Model';

export type DataType = {
  nodes: Map<number, NodeType>;
  edges: Map<number, EdgeType>;
};

export type NodeType = {
  id: number;
  accountId: number;
  title: string;
  firstUpload: Date;
  lastUpdate: Date;
};

export type EdgeType = {
  id: number;
  accountId: number;
  fromId: number;
  toId: number;
};

export type ConstructorParam = {
} & ParentConstructorParam<DataType>;

@injectable()
export default class PostGraph extends Model<DataType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
  }
}
