import axios from 'axios';
import { GetAllNodeSummary } from '@/common/api/post';

export async function getAllNodeSummary () {
  return (await axios.get<GetAllNodeSummary>(`/api/post/getAllNodeSummary`)).data.ret;
}
