import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraphElement from '@/src/app/App/Body/AccountPage/PostGraph';

@injectable()
export default class DeleteEdge extends Operator<DataType> {
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

  delete (id: number) {
    this.data.edges.delete(id);
    this.element.edges.remove(id);
  }
}
