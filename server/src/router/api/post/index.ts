import express, { Request, Response } from 'express';
import type { GetByIdPayload, GetAllNodeSummary, AppendPostNodeResolve, AppendPostNodeRequest } from '@/common/api/post';
import { getAllNodeSummary, getById, create } from './functions';

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

// router.get('/getById', async (req: Request<any, AppendPostNode, GetByIdPayload>, res: Response<AppendPostNode>) => {
//   try {
//     res.end(await getById(req.body.id));
//   } catch (e) {
//     console.log('GET /api/post failed', e);
//   }
// });

router.post('/appendPostNode', async (req: Request<any, AppendPostNodeResolve, AppendPostNodeRequest>, res: Response) => {
  try {
    console.log(req.body);
    const data = await create(req.body);
    res.json({ id: data });
    res.end();
  } catch (e) {
    console.log('POST /api/post failed', e);
  }
});

export default router;
