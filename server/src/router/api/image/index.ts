import express, { Request, Response, RequestHandler } from 'express';
import multer from 'multer';
import path from 'path';
import fsPromise from 'fs/promises';
import fs from 'fs';
import mime from 'mime-types';
import { UploadResponse } from '@/common/api/image';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.IMAGE_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, `${Math.random().toString().substring(2, 2 + 32)}.${mime.extension(file.mimetype)}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res: Response<UploadResponse>) => {
  if (req.file === undefined) {
    res.end()
    return;
  }
  if (!fs.existsSync(path.join(process.env.IMAGE_PATH, req.body.postId))) {
    await fsPromise.mkdir(path.join(process.env.IMAGE_PATH, req.body.postId));
  }
  await fsPromise.rename(path.join(req.file.destination, req.file.filename), path.join(process.env.IMAGE_PATH, req.body.postId, req.file.filename));
  res.json({
    ret: {
      url: `/images?postId=${req.body.postId}&filename=${req.file.filename}`,
    },
  });
  res.end();
});

export default router;
