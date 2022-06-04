import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';
import { EdgeType } from '../../../DataStruct/InitialPostEdges';
import PostGraphElement from '@/src/app/App/Body/AccountPage/PostGraph';

@injectable()
export default class AddEdge extends Operator<DataType> {
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

  add (edge: EdgeType) {
    this.data.edges.set(edge.id, edge);
    this.element.edges.add({ id: edge.id, from: edge.fromId, to: edge.toId, arrows: { to: { enabled: true, type: 'arrow' } } });
  }
}
