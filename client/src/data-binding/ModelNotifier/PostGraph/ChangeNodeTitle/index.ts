import { SYMBOLS } from '@/src/admin/types';
import { SYMBOLS as BasicSYMBOLS } from '@/src/types';
import Node from '@/src/data-binding/Model/PostGraph/Node';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import ModelNotifier from '../..';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import PostGraphChangeNodeTitleObserver from '@/src/data-binding/IObserver/EBGraphVis/ChangeNodeTitle/inversified';
import { EventType } from '@/src/data-binding/IObserver/EBGraphVis/ChangeNodeTitle';

@injectable()
export default class ChangeNodeTitle extends ModelNotifier<DataType> {
  constructor (
    @inject(BasicSYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.PostGraphChangeNodeTitleObserver) observer: PostGraphChangeNodeTitleObserver,
  ) {
    super({
      model: postGraph,
    });
    this.attachObserver(observer);
  }

  async notify (event: EventType) {
    try {
      await super.notify(event);
    } catch (e) {
      console.log('PostGraphChangeNodeTitleNotifier.notify failed');
      throw e;
    }
  }

  async changeTitle (id: number, title: string) {
    this.model.data.nodes.get(id)!.data.title = title;
    await this.notify({ id, title });
  }
}
