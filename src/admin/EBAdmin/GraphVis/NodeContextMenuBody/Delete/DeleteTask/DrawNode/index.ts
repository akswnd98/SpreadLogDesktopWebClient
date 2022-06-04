import Node from '@/src/Task/Node';
import Static from '@/src/admin/inversify.config';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import { SYMBOLS } from '@/src/admin/types';
import ServerNode from '../ServerNode';
import PostGraphDeleteNodeNotifier from '@/src/data-binding/ModelNotifier/PostGraph/DeleteNode';
import PostGraph from '@/src/app/data-binding/Model/PostGraph';
import DeletePostEdgeNotifier from '@/src/admin/data-binding/ModelNotifier/DeletePostEdge';

export type PrevNodes = {
  server?: ServerNode;
};

export default class DrawNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  async doTask () {
    const id = this.prevNodes.server!.id;
    if (id < 0) return;
    const nodeNotifier = Static.instance.get<PostGraphDeleteNodeNotifier>(SYMBOLS.PostGraphDeleteNodeNotifier);
    await nodeNotifier.delete(id);
    const edgeNotifier = Static.instance.get<DeletePostEdgeNotifier>(SYMBOLS.DeletePostEdgeNotifier);
    await Promise.all(this.findEdgesRelatedToNode(id).map((id) => (
      edgeNotifier.delete(id)
    )));
  }

  async handleFail () {
  }

  findEdgesRelatedToNode (id: number) {
    const concern = Array.from(Static.instance.get<PostGraph>(BasicSYMBOLS.PostGraph).data.edges).filter(([_, edge]) => (
      edge.data.fromId === id || edge.data.toId === id
    ));
    return concern.map(([id, edge]) => id);
  }
}
