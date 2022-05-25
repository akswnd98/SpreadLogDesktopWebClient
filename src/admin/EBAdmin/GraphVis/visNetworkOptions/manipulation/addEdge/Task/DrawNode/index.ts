import Node from '@/src/Task/Node';
import 'reflect-metadata';
import { injectable } from 'inversify';
import ServerNode from '../ServerNode';
import Static from '@/src/admin/inversify.config';
import AddPostEdgeNotifier from '@/src/admin/data-binding/ModelNotifier/AddPostEdge';
import { SYMBOLS } from '@/src/admin/types';

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
    Static.instance.get<AddPostEdgeNotifier>(SYMBOLS.AddPostEdgeNotifier).setData({
      id: this.prevNodes.server!.id,
      fromId: this.prevNodes.server!.fromTo.from,
      toId: this.prevNodes.server!.fromTo.to
    });
  }

  async handleFail () {
    console.log('DrawNode.handleFail()');
  }
}
