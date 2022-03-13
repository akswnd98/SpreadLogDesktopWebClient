import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import { createProxyMiddleware } from 'http-proxy-middleware';
import https from 'https';
import fs from 'fs';
import login from './login';

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
  res.sendFile(path.resolve(__dirname, '../dist/admin.html'));
});

app.get('/admin_bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/admin_bundle.js'));
});

app.get('/assets/images/:filename', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../dist/assets/images/${req.params.filename}`));
});

app.get('assets/fonts/:filename', (req, res) => {
  res.sendFile(path.resolve(__dirname, `../dist/assets/fonts/${req.params.filename}`));
});

app.use('/login', login);

https.createServer(options, app).listen(process.env.SERVER_PORT, () => {
  console.log(`server started on port ${app.get('port')}`);
});
