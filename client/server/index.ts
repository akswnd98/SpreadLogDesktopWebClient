import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

const app = express();

if (process.env.MODE === 'development') {
  const webpackConfig = { mode: 'development', ...require('../webpack.config.js') };
  const compiler = webpack(webpackConfig);
  const instance = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  });

  app.use(instance);
}

app.set('port', 8080);

app.use('/api', createProxyMiddleware('', {
  target: `http://${process.env.HOST}:${process.env.API_SERVER_PORT}`,
  changeOrigin: true,
}));

app.get('/', (req, res) => {
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

app.listen(app.get('port'), () => {
  console.log(`server started on port ${app.get('port')}`);
});
