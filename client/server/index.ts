import express, { Request } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import { createProxyMiddleware } from 'http-proxy-middleware';
import https from 'https';
import fs from 'fs';
import login from './login';
import { ImageRequest } from './images';
import crypto from 'crypto';
import session from 'express-session';
import images from './images';

dotenv.config();

const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, '../../ssl/eb.com.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../ssl/eb.com.crt')),
};

if (process.env.MODE === 'development') {
  const webpackConfig = { mode: 'development', ...require('../webpack.config.js') };
  const compiler = webpack(webpackConfig);
  const instance = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  });

  app.use(instance);
}

app.set('port', process.env.SERVER_PORT);

app.use(session({
  secret: process.env.ADMIN_SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
  },
}));

app.use('/api', createProxyMiddleware('', {
  target: `http://${process.env.HOST}:${process.env.API_SERVER_PORT}`,
  changeOrigin: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('/blog*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('/public_bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/public_bundle.js'));
});

app.get('/admin', (req, res) => {
  if (req.session.isAdmin === true) {
    res.sendFile(path.resolve(__dirname, '../dist/admin.html'));
  } else {
    res.sendFile(path.resolve(__dirname, '../dist/adminLogin.html'));
  }
});

app.get('/admin_bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/admin_bundle.js'));
});

app.get('/adminLogin', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/adminLogin.html'));
});

app.get('/adminLogin_bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/adminLogin_bundle.js'));
});

app.get('/checkAdmin', (req, res) => {
  if (crypto.createHash('sha256').update(process.env.ADMIN_LOGIN_TOKEN).digest('base64') === crypto.createHash('sha256').update(req.query.token as string).digest('base64')) {
    req.session.isAdmin = true;
    res.redirect('/admin');
  } else {
    res.redirect('/adminLogin');
  }
});

app.get('/assets/images/:filename', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../dist/assets/images/${req.params.filename}`));
});

app.get('/assets/fonts/:filename', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../dist/assets/fonts/${req.params.filename}`));
});

app.use('/images', images);

app.use('/login', login);

https.createServer(options, app).listen(process.env.SERVER_PORT, () => {
  console.log(`server started on port ${app.get('port')}`);
});
