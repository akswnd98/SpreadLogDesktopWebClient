import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType, NodeType, EdgeType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraphElement from '@/src/app/App/Body/AccountPage/PostGraph';

@injectable()
export default class Setter extends Operator<DataType> {
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

  set (data: DataType) {
    this.data.nodes = data.nodes;
    this.data.edges = data.edges;
    this.element.edges.clear();
    this.element.edges.add(Array.from(data.edges.values()).map((v) => ({ id: v.id, from: v.fromId, to: v.toId, arrows: { to: { enabled: true, type: 'arrow' } } })));
    this.element.nodes.clear();
    this.element.nodes.add(Array.from(data.nodes.values()).map((v) => ({ id: v.id, label: v.title })));
  }
}
