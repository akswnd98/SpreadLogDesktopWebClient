import type { PostPayload } from '@/common/api/post';
import Post from '@/db/Post';

export async function getById (id: number): Promise<Post> {
  try {
    return findOne(id);
  } catch (err) {
    console.log(err);
    throw new Error('Post.getPostById failed');
  }
}

export async function create (payload: PostPayload) {
  try {
    const curDate = new Date();
    await Post.create({
      firstUpload: curDate,
      lastUpdate: curDate,
      ...payload,
    });
  } catch (err) {
    console.log(err);
    throw new Error('Post.createPost failed');
  }
}

async function findOne (id: number): Promise<Post> {
  try {
    const ret = await Post.findOne({ where: { id } });
    if (ret === null) throw new Error('Post.findOne: no such id');
    return ret;
  } catch (err) {
    console.log(err);
    throw new Error('Post.findOne failed');
  }
}
