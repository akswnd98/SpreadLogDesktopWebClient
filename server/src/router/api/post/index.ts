import express, { Request, Response, RequestHandler } from 'express';
import type {
  DeleteByIdRequest,
  DeleteByIdResponse,
  GetAllNodeSummary,
  GetAllEdge,
  AppendPostNodeResponse,
  AppendPostNodeRequest,
  DeleteEdgeByIdRequest,
  DeleteEdgeByIdResponse,
  GetByIdRequest, 
  GetByIdResponse,
  UpdatePostRequest,
  UpdatePostResponse,
  AppendPostEdgeResponse,
  AppendPostEdgeRequest,
} from '@/common/api/post';
import { getAllNodeSummary, getAllEdge, getById, create, deletePostNodeById, updatePost, appendPostEdge, deleteEdgeById } from './functions';

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
    res.end();
  } catch (e) {
    console.log('GET /api/getAllNodeSummary failed', e);
    res.end();
  }
});

router.get('/getAllEdge', async (req: Request<any, GetAllEdge>, res: Response<GetAllEdge>) => {
  try {
    const ret = await getAllEdge();
    res.json({
      ret: ret.map((v) => ({
        id: v.id!,
        fromId: v.fromId!,
        toId: v.toId!,
      })),
    });
    res.end();
  } catch (e) {
    console.log('GET /api/post/getAllEdge', e);
    res.end();
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
        firstUpload: post.firstUpload!.toString(),
        lastUpdate: post.lastUpdate!.toString(),
      },
    });
    res.end();
  } catch (e) {
    console.log('GET /api/post failed', e);
  }
});

router.post('/appendPostNode', async (req: Request<any, AppendPostNodeResponse, AppendPostNodeRequest>, res: Response<AppendPostNodeResponse>) => {
  try {
    const data = await create(req.body);
    res.json({ id: data });
    res.end();
  } catch (e) {
    console.log('POST /api/post/appendPostNode failed', e);
  }
});

router.delete('/deleteNodeById', async (req: Request<any, DeleteByIdResponse, DeleteByIdRequest>, res: Response<DeleteByIdResponse>) => {
  try {
    const data = await deletePostNodeById(req.body);
    res.json({ error: false });
    res.end();
  } catch (e) {
    console.log('DELETE /api/post/deleteNodeById', e);
    res.json({ error: true });
    res.end();
  }
});

router.post('/appendPostEdge', async (req: Request<any, AppendPostEdgeResponse, AppendPostEdgeRequest>, res: Response<AppendPostEdgeResponse>) => {
  try {
    console.log('req.body', req.body);
    const data = await appendPostEdge(req.body);
    res.json({ id: data });
    res.end();
  } catch (e) {
    console.log('POST /api/post/appendPostEdge', e);
    res.end();
  }
});

router.delete('/deleteEdgeById', async (req: Request<any, DeleteEdgeByIdResponse, DeleteEdgeByIdRequest>, res: Response<DeleteEdgeByIdResponse>) => {
  try {
    await deleteEdgeById(req.body);
    res.json({ error: false });
    res.end();
  } catch (e) {
    console.log('POST /api/post/appendPostEdge', e);
    res.json({ error: true });
    res.end();
  }
});

router.put('/test', async (req, res) => {
  console.log('hel');
  res.json({
    ret: 'test',
  });
  res.end();
});

router.put('/updatePost', async (req: Request<any, UpdatePostResponse, any, UpdatePostRequest>, res: Response<UpdatePostResponse>) => {
  try {
    console.log('hello', req.body.title);
    await updatePost(req.body.id, req.body.title, req.body.body);
    res.json({ error: false });
    res.end();
  } catch (e) {
    console.log('PUT /api/post/putdatePost', e);
    res.json({ error: true });
    res.end();
  }
});

export default router;
