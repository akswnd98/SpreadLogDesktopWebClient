import Static from '@/src/admin/inversify.config';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import { SYMBOLS } from '@/src/admin/types';
import axios, { AxiosResponse } from 'axios';
import { AppendPostEdgeRequest, AppendPostEdgeResponse } from '@/common/api/post';
import AddPostEdgeNotifier from '@/src/admin/data-binding/ModelNotifier/AddPostEdge';
import AddEdgeTask from './Task';
import GraphVis from '@/src/admin/EBAdmin/GraphVis';

export default async (data: any, callback: (data: any) => void) => {
  await mainLogic(data);
  callback(null);
  Static.instance.get<GraphVis>(SYMBOLS.EBGraphVis).network.addEdgeMode();
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
