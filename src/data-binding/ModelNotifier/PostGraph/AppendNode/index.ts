import { SYMBOLS } from '@/src/admin/types';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import Node from '@/src/app/data-binding/Model/PostGraph/PostGraphNode';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import ModelNotifier from '../..';
import PostGraph, { DataType } from '../../../../app/data-binding/Model/PostGraph';
import PostGraphAppendNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/AppendNode/inversified';

@injectable()
export default class AppendNode extends ModelNotifier<DataType> {
  constructor (
    @inject(BasicSYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.PostGraphAppendNodeObserver) observer: PostGraphAppendNodeObserver,
  ) {
    super({
      model: postGraph,
    });
    this.attachObserver(observer);
  }

  async notify (event: Node) {
    try {
      await super.notify(event);
    } catch (e) {
      console.log('PostGraphAppendNotifier.notify failed');
      throw e;
    }
  }

  async append (node: Node) {
    this.model.data.nodes.set(node.data.id, node);
    await this.notify(node);
  }
}
