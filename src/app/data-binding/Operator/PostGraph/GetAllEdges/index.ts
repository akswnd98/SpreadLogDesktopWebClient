import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class GetAllEdges extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.PostGraph) model: PostGraph,
  ) {
    super({
      model,
    });
  }

  get () {
    return Array.from(this.data.edges.values());
  }
}
