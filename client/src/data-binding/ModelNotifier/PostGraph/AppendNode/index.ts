import { SYMBOLS } from '@/src/admin/types';
import Node from '@/src/data-binding/Model/PostGraph/Node';
import { injectable, inject } from 'inversify';
import ModelNotifier from '../..';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import PostGraphAppendNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/AppendNode/inversified';

@injectable()
export default class AppendNode extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.PostGraphAppendNodeObserver) observer: PostGraphAppendNodeObserver,
  ) {
    super({
      model: postGraph,
    });
    this.attachObserver(observer);
  }

  notify (event: Node) {
    try {
      super.notify(event);
    } catch (e) {
      console.log('PostGraphAppendNotifier.notify failed');
      throw e;
    }
  }

  append (node: Node) {
    this.model.data.nodes.add(node);
    this.notify(node);
  }
}
