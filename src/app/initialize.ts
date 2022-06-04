import axios from 'axios';
import { Path } from 'path-parser';

const path = new Path('/account/:nickname');

export async function getInitialPostNodes () {
  const test = path.partialTest(location.pathname);
  if (test === null) {
    return [];
  } else {
    return (await axios.get('/api/post/getAllPostNodes', { params: { ...test } })).data.list;
  }
}

export async function getInitialPostEdges () {
  const test = path.partialTest(location.pathname);
  if (test === null) {
    return [];
  } else {
    return (await axios.get('/api/post/getAllPostEdges', { params: { ...test } })).data.list;
  }
}
