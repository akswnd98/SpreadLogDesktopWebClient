import express from 'express';
import axios from 'axios';
import kakao from './kakao';

const router = express.Router();

router.use('/kakao', kakao);

export default router;
