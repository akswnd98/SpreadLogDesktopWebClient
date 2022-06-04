import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';
import PostGraphElement from '@/src/app/App/Body/AccountPage/PostGraph';

@injectable()
export default class DeleteNode extends Operator<DataType> {
  element;

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
    this.data.nodes.delete(id);
    this.element.nodes.remove(id);
  }
}
