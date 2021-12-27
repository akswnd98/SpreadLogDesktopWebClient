import express, { Request, Response } from 'express';
import type { PostPayload, GetByIdPayload } from '@/common/api/post';
import { getById, create } from './functions';

const router = express.Router();

router.get('/getById', async (req: Request<any, PostPayload, GetByIdPayload>, res: Response<PostPayload>) => {
  try {
    res.end(await getById(req.body.id));
  } catch (err) {
    console.log('GET /api/post failed', err);
  }
});

router.post('/', async (req: Request<any, any, PostPayload>, res: Response) => {
  try {
    console.log(req.body);
    await create(req.body);
    res.end();
  } catch (err) {
    console.log('POST /api/post failed', err);
  }
});

export default router;
