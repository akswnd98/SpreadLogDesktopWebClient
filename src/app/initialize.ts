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

export async function getLoginInfo () {
  try {
    if ((await axios.get('/api/account/email/login/checkIsLoggedIn')).data.result) {
      return {
        isLoggedIn: true,
        ...(await axios.get('/api/account/email/logged-in/getLoginInfo')).data,
      }
    } else {
      return {
        isLoggedIn: false,
        id: -1,
        nickname: '',
      };
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export async function getComments (postId: number) {
  const ret = await (await axios.get('/api/post/comment/getComments', { params: { postId } })).data.list;
  return ret;
}
