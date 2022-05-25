import Post from '.';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Title from './Title';
import Body from './Body';
import PostDate from './Date';

@injectable()
export default class Inversified extends Post {
  constructor () {
    super({
      title: new Title(),
      body: new Body(),
      date: new PostDate(),
    });
  }
}

customElements.define('eb-app-post-inversified', Inversified);
