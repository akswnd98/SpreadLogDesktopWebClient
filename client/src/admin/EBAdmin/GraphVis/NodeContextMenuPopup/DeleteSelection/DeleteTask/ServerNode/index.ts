import Node from '@/src/Task/Node';
import axios, { AxiosResponse } from 'axios';
import Static from '@/src/admin/inversify.config';
import NodeContextMenuSelectedId from '@/src/data-binding/Model/NodeContextMenuSelectedId';
import { SYMBOLS } from '@/src/admin/types';
import { DeleteByIdRequest, DeleteByIdResponse } from '@/common/api/post';

export type PrevNodes = {
};

export default class ServerNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  id: number = -1;

  async doTask () {
    const id = Static.instance.get<NodeContextMenuSelectedId>(SYMBOLS.NodeContextMenuSelectedId).data.id
    this.id = id;
    if (id < 0) return;
    const data = await axios.delete<DeleteByIdResponse, AxiosResponse<DeleteByIdResponse>, DeleteByIdRequest>('/api/post/deleteNodeById', {
      data: { id },
    });
  }

  async handleFail () {
  }
}
