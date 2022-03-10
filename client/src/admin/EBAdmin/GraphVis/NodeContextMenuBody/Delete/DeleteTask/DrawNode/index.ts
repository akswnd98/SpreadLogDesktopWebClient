import Node from '@/src/Task/Node';
import axios, { AxiosResponse } from 'axios';
import Static from '@/src/admin/inversify.config';
import NodeContextMenuSelectedId from '@/src/data-binding/Model/NodeContextMenuSelectedId';
import { SYMBOLS } from '@/src/admin/types';
import { DeleteByIdRequest, DeleteByIdResponse } from '@/common/api/post';
import ServerNode from '../ServerNode';
import PostGraphDeleteNodeNotifier from '@/src/data-binding/ModelNotifier/PostGraph/DeleteNode';

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
    const notifier = Static.instance.get<PostGraphDeleteNodeNotifier>(SYMBOLS.PostGraphDeleteNodeNotifier);
    await notifier.delete(id);
  }

  async handleFail () {
  }
}
