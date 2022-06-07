import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import axios, { AxiosResponse } from 'axios';
import AddEdge from '@/src/app/data-binding/Operator/PostGraph/AddEdge';
import PostGraphElement from '../../..';

export default async (data: any, callback: (data: any) => void) => {
  await mainLogic(data);
  callback(null);
  Static.instance.get<PostGraphElement>(SYMBOLS.PostGraphElement).network.addEdgeMode();
}

async function mainLogic (data: any) {
  try {
    const edgeRst = (await axios.post('/api/post/account/addEdge', { fromId: data.from, toId: data.to })).data
    const edgeAdder = Static.instance.get<AddEdge>(SYMBOLS.PostGraphAddEdge);
    edgeAdder.add(edgeRst);
  } catch (e) {
    console.log(e);
    throw new Error('mainLogic failed');
  }
}
