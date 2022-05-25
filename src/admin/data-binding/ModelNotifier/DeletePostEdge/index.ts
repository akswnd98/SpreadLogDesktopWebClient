import { SYMBOLS } from '@/src/admin/types';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import ModelNotifier from '@/src/data-binding/ModelNotifier';
import PostGraph, { DataType } from '@/src/data-binding/Model/PostGraph';
import PostGraphDeleteNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/DeleteNode/inversified';
import DeletePostEdgeObserver from '@/src/admin/data-binding/Observer/DeletePostEdge';

@injectable()
export default class Delete extends ModelNotifier<DataType> {
  constructor (
    @inject(BasicSYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.DeletePostEdgeObserver) observer: DeletePostEdgeObserver,
  ) {
    super({
      model: postGraph,
    });
    this.attachObserver(observer);
  }

  async notify (event: number) {
    try {
      await super.notify(event);
    } catch (e) {
      console.log('DeletePostEdge.notify failed');
      throw e;
    }
  }

  async delete (id: number) {
    this.model.data.edges.delete(id);
    await this.notify(id);
  }
}
