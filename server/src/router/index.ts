import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import api from './api';

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/material-files', express.static(path.join(__dirname, '../material-files')));

app.use('/api', api);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`started on port ${process.env.SERVER_PORT}`);
});
