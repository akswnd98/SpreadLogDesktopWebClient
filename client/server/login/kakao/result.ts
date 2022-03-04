import axios from 'axios';
import express from 'express';
import qs from 'qs';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tokenWrapper = await axios.post(`https://kauth.kakao.com/oauth/token`, qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.KAKAO_CLIENT_ID,
      redirect_uri: `https://${process.env.HOST}:${process.env.SERVER_PORT}/login/kakao/result`,
      code: req.query.code,
    }));
    const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${tokenWrapper.data.access_token}`,
      },
    });
    res.send(JSON.stringify(user.data));
    res.end();
  } catch (e) {
    console.log(e, `GET /login/kakao/result failed`);
  }
});

export default router;
