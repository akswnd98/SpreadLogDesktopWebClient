import { AppendPostNodeRequest, AppendPostNodeResponse } from '@/common/api/post';
import NewNode from '@/src/admin/data-binding/Model/NewNode';
import Static from '@/src/admin/inversify.config';
import Node from '@/src/Task/Node';
import axios, { AxiosResponse } from 'axios';
import DrawNode from '../DrawNode';
import { SYMBOLS } from '@/src/admin/types';

export type PrevNodes = {
};

export default class ServerNode extends Node {
  private nominal!: void;

  nextNodes: [] = [];

  prevNodes: PrevNodes = {};

  id: number = -1;

  async doTask () {
    const model = Static.instance.get<NewNode>(SYMBOLS.NewNodeModel);
    const data = (await axios.post<AppendPostNodeResponse, AxiosResponse<AppendPostNodeResponse>, AppendPostNodeRequest>(`/api/post/appendPostNode`, {
      title: model.data.title,
      body: '',
    })).data;
    this.id = data.id;
  }

  async handleFail () {
    console.log('ServerNode.handleFail()');
  }
}
