import Node from '@/src/Task/Node';
import axios, { AxiosResponse } from 'axios';
import { AppendPostEdgeResponse, AppendPostEdgeRequest } from '@/common/api/post';

export type PrevNodes = {
};

export default class ServerNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  fromTo: {
    from: number;
    to: number;
  } = {
    from: -1,
    to: -1,
  };

  id: number = -1;

  async doTask () {
    this.id = (await axios.post<AppendPostEdgeResponse, AxiosResponse<AppendPostEdgeResponse>, AppendPostEdgeRequest>(`/api/post/appendPostEdge`, {
      fromId: this.fromTo.from,
      toId: this.fromTo.to,
    })).data.id;
  }

  async handleFail () {
    console.log('ServerNode.handleFail()');
  }
}
