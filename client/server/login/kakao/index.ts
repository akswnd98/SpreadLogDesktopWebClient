import express from 'express';
import axios from 'axios';
import result from './result';

const router = express.Router();

router.use('/result', result);

router.get('/auth', async (req, res) => {
  res.redirect(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=https://localhost:8080/login/kakao/result&response_type=code`);
});

export default router;
