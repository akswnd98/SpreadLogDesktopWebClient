import express, { Request, Response } from 'express';
import post from './post';
import image from './image';

const router = express.Router();

router.use('/post', post);
router.use('/image', image);

export default router;
