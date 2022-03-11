import type { AppendPostEdgeRequest, AppendPostNodeRequest, DeleteByIdRequest, DeleteEdgeByIdRequest } from '@/common/api/post';
import Post from '@/db/Post';
import PostGraphEdge from '@/db/Post/Edge';
import { Op } from 'sequelize';

export async function getAllNodeSummary () {
  return Post.findAll({
    attributes: ['id', 'title'],
  });
}

export async function getAllEdge () {
  return PostGraphEdge.findAll({
    attributes: ['id', 'fromId', 'toId'],
  });
}

export async function getById (id: number): Promise<Post> {
  try {
    return findOne(id);
  } catch (err) {
    console.log(err);
    throw new Error('Post.getPostById failed');
  }
}

export async function create (payload: AppendPostNodeRequest) {
  try {
    const curDate = new Date();
    const ret = await Post.create({
      firstUpload: curDate,
      lastUpdate: curDate,
      ...payload,
    });
    return ret.id!;
  } catch (err) {
    console.log(err);
    throw new Error('Post.createPost failed');
  }
}

export async function deletePostNodeById (payload: DeleteByIdRequest) {
  try {
    await Post.destroy({
      where: {
        id: payload.id,
      },
    });
    await PostGraphEdge.destroy({
      where: {
        [Op.or]: {
          fromId: payload.id,
          toId: payload.id,
        },
      },
    });
  } catch (e) {
    console.log(e);
    throw 'deletePostNodeById failed';
  }
}

export async function appendPostEdge (payload: AppendPostEdgeRequest) {
  try {
    const ret = await PostGraphEdge.create({
      ...payload,
    });
    return ret.id!;
  } catch (e) {
    console.log(e);
    throw new Error('appendPostEdge failed');
  }
}

export async function deleteEdgeById (payload: DeleteEdgeByIdRequest) {
  try {
    await PostGraphEdge.destroy({
      where: {
        id: payload.id,
      },
    });
  } catch (e) {
    console.log(e);
    throw new Error('deleteEdgeById failed');
  }
}

export async function findOne (id: number): Promise<Post> {
  try {
    const ret = await Post.findOne({ where: { id } });
    if (ret === null) throw new Error('Post.findOne: no such id');
    return ret;
  } catch (err) {
    console.log(err);
    throw new Error('Post.findOne failed');
  }
}

export async function updatePost (id: number, title: string, body: string) {
  const ret = await Post.update({
    title,
    body,
    lastUpdate: new Date(),
  }, {
    where: {
      id,
    },
  });
}
