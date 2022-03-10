import { AppendPostNodeRequest, AppendPostNodeResponse } from '@/common/api/post';
import NewNode from '@/src/admin/data-binding/Model/NewNode';
import Static from '@/src/admin/inversify.config';
import Node from '@/src/Task/Node';
import axios, { AxiosResponse } from 'axios';
import DrawNode from '../DrawNode';
import { SYMBOLS } from '@/src/admin/types';
import EdgeContextMenuSelectedId from '@/src/data-binding/Model/NodeContextMenuSelectedId';
import { DeleteEdgeByIdRequest, DeleteEdgeByIdResponse } from '@/common/api/post';

export type PrevNodes = {
};

export default class ServerNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  id: number = -1;

  async doTask () {
    const id = Static.instance.get<EdgeContextMenuSelectedId>(SYMBOLS.EdgeContextMenuSelectedId).data.id;
    const data = await axios.delete<DeleteEdgeByIdResponse, AxiosResponse<DeleteEdgeByIdResponse>, DeleteEdgeByIdRequest>('/api/post/deleteEdgeById', {
      data: { id },
    });
    this.id = id;
  }

  async handleFail () {
    console.log('ServerNode.handleFail()');
  }
}
