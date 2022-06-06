import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import { SYMBOLS } from '@/src/app/symbols';
import { NodeType } from '../../../DataStruct/InitialPostNodes';
import PostGraphNodeUpdateTitleNotifier from '../../../Notifier/PostGraph/Node/Update/Title';

export type PayloadParam = Partial<Omit<NodeType, 'id'>> & Pick<NodeType, 'id'>;

@injectable()
export default class UpdateNode extends Operator<DataType> {
  notifier: PostGraphNodeUpdateTitleNotifier;

  constructor (
    @inject(SYMBOLS.PostGraph) model: PostGraph,
  ) {
    super({
      model,
    });
    this.notifier = new PostGraphNodeUpdateTitleNotifier();
  }

  async update (payload: PayloadParam) {
    const cur = this.data.nodes.get(payload.id);
    if (cur === undefined) return;
    this.data.nodes.set(payload.id, { ...cur, ...payload });
    if (payload.title === undefined) return;
    await this.notifier.notify({ ...cur, ...payload });
  }
}
