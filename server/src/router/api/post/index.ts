import express, { Request, Response } from 'express';
import type { DeleteByIdRequest, DeleteByIdResponse, GetAllNodeSummary, AppendPostNodeResponse, AppendPostNodeRequest, GetByIdRequest, GetByIdResponse } from '@/common/api/post';
import { getAllNodeSummary, getById, create, deletePostNodeById } from './functions';
import { textChangeRangeNewSpan } from 'typescript';

const router = express.Router();

router.get('/getAllNodeSummary', async (req: Request<any, GetAllNodeSummary, any>, res: Response<GetAllNodeSummary>) => {
  try {
    const ret = await getAllNodeSummary();
    res.json({
      ret: ret.map((v) => ({
        id: v.id!,
        title: v.title!,
      })),
    });
  } catch (e) {
    console.log('GET /api/getAllNodeSummary failed', e);
  }
});

router.get('/getById', async (req: Request<any, GetByIdResponse, any, GetByIdRequest>, res: Response<GetByIdResponse>) => {
  try {
    const post = await getById(req.query.id);
    res.json({
      ret: {
        id: post.id!,
        title: post.title!,
        body: post.body!,
        firstUpload: post.firstUpload!,
        lastUpdate: post.lastUpdate!,
      },
    });
    res.end();
  } catch (e) {
    console.log('GET /api/post failed', e);
  }
});

router.post('/appendPostNode', async (req: Request<any, AppendPostNodeResponse, AppendPostNodeRequest>, res: Response<AppendPostNodeResponse>) => {
  try {
    console.log(req.body);
    const data = await create(req.body);
    res.json({ id: data });
    res.end();
  } catch (e) {
    console.log('POST /api/post/appendPostNode failed', e);
  }
});

router.delete('/deleteNodeById', async (req: Request<any, DeleteByIdResponse, DeleteByIdRequest>, res: Response<DeleteByIdResponse>) => {
  try {
    console.log(req.body);
    const data = await deletePostNodeById(req.body);
    res.json({ error: false });
    res.end();
  } catch (e) {
    console.log('DELETE /api/post/deleteNodeById', e);
    res.json({ error: true });
    res.end();
  }
});

export default router;
