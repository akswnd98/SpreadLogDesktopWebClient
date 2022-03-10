import axios from 'axios';
import { GetAllNodeSummary, GetAllEdge } from '@/common/api/post';

export async function getAllNodeSummary () {
  return (await axios.get<GetAllNodeSummary>(`/api/post/getAllNodeSummary`)).data.ret;
}

export async function getAllEdge () {
  return (await axios.get<GetAllEdge>(`/api/post/getAllEdge`)).data.ret;
}
