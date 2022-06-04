import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';
import { NodeType } from '../../../DataStruct/InitialPostNodes';
import PostGraphElement from '@/src/app/App/Body/AccountPage/PostGraph';

@injectable()
export default class AddNode extends Operator<DataType> {
  element: PostGraphElement;

  constructor (
    @inject(SYMBOLS.PostGraph) model: PostGraph,
    @inject(SYMBOLS.PostGraphElement) element: PostGraphElement,
  ) {
    super({
      model,
    });
    this.element = element;
  }

  async add (node: NodeType) {
    this.element.nodes.add({ id: node.id, label: node.title });
    this.data.nodes.set(node.id, node);
  }
}
