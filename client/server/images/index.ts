import express, { Request, } from 'express';
import path from 'path';

export interface ImageRequest {
  postId: number;
  filename: string;
};

const router = express.Router();

router.get('/', (req: Request<any, any, any, ImageRequest>, res) => {
  res.sendFile(path.join(process.env.IMAGE_PATH!, req.query.postId.toString(), req.query.filename));
  console.log(path.join(process.env.IMAGE_PATH!, req.query.postId.toString(), req.query.filename));
});

export default router;
