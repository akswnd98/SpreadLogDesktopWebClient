import Static from '@/src/admin/inversify.config';
import { SYMBOLS as BasicSYMBOLS } from '@/src/types';
import { SYMBOLS } from '@/src/admin/types';
import axios, { AxiosResponse } from 'axios';
import { AppendPostEdgeRequest, AppendPostEdgeResponse } from '@/common/api/post';
import AddPostEdgeNotifier from '@/src/admin/data-binding/ModelNotifier/AddPostEdge';
import AddEdgeTask from './Task';

export default (data: any, callback: (data: any) => void) => {
  mainLogic(data);
  callback(null);
}

async function mainLogic (data: any) {
  try {
    const task = Static.instance.get<AddEdgeTask>(SYMBOLS.AddPostEdgeTask);
    task.nodes.server.fromTo = { from: data.from, to: data.to };
    task.readyTask();
    await task.doTask();
  } catch (e) {
    console.log(e);
    throw new Error('mainLogic failed');
  }
}
