import Node from '@/src/Task/Node';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import AppendNode from '@/src/data-binding/ModelNotifier/PostGraph/AppendNode';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import { SYMBOLS } from '@/src/admin/types';
import Static from '@/src/admin/inversify.config';
import DeletePostEdgeNotifier from '@/src/admin/data-binding/ModelNotifier/DeletePostEdge';
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
    await Static.instance.get<DeletePostEdgeNotifier>(SYMBOLS.DeletePostEdgeNotifier).delete(this.prevNodes.server!.id);
  }

  async handleFail () {
    console.log('DrawNode.handleFail()');
  }
}
