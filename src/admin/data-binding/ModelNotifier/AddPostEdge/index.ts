import PostGraph, { DataType } from '@/src/data-binding/Model/PostGraph';
import { DataType as EdgeDataType } from '@/src/data-binding/Model/PostGraph/Edge';
import ModelNotifier from '@/src/data-binding/ModelNotifier';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Static from '@/src/admin/inversify.config';
import { ParameterizableNewable } from '@/src/inversify';
import Edge from '@/src/data-binding/Model/PostGraph/Edge/inversified';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import AddPostEdgeObserver from '../../Observer/AddPostEdge';

@injectable()
export default class AddPostEdge extends ModelNotifier<DataType> {
  constructor (
    @inject(BasicSYMBOLS.PostGraph) model: PostGraph,
    @inject(SYMBOLS.AddPostEdgeObserver) observer: AddPostEdgeObserver,
  ) {
    super({
      model,
    });
    this.attachObserver(observer);
  }

  async notify (event: EdgeDataType) {
    await super.notify(event);
  }

  async setData (data: EdgeDataType) {
    const EdgeNewable = Static.instance.get<ParameterizableNewable<Edge, ConstructorParameters<typeof Edge>>>(BasicSYMBOLS.PostEdgeNewable);
    this.model.data.edges.set(data.id, new EdgeNewable(data.id, data.fromId, data.toId));
    await this.notify(data);
  }
}
