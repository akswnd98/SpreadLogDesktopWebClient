import Node from '@/src/Task/Node';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import AppendNode from '@/src/data-binding/ModelNotifier/PostGraph/AppendNode';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import { SYMBOLS } from '@/src/admin/types';
import Static from '@/src/admin/inversify.config';
import EBNewDialogPopup from '../../../..';
import NewNode from '@/src/admin/data-binding/Model/NewNode';
import PostNode from '@/src/data-binding/Model/PostGraph/Node/inversified';
import { ParameterizableNewable } from '@/src/inversify';
import ServerNode from '../ServerNode';

export type PrevNodes = {
  server?: ServerNode;
};

@injectable()
export default class DrawNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  constructor () {
    super();
  }

  async doTask () {
    const appendNode = Static.instance.get<AppendNode>(SYMBOLS.PostGraphAppendNodeNotifier);
    const input = Static.instance.get<NewNode>(SYMBOLS.NewNodeModel);
    const NodeNewable = Static.instance.get<ParameterizableNewable<PostNode, ConstructorParameters<typeof PostNode>>>(BasicSYMBOLS.PostNodeNewable);
    await appendNode.append(new NodeNewable(this.prevNodes.server!.id, input.data.title));
  }

  async handleFail () {
    console.log('DrawNode.handleFail()');
  }
}
