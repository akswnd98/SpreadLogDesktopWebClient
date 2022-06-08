import Post from '.';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Title from './Title';
import Body from './Body';
import PostDate from './Date';
import PostChargingProcess from './ChargingProcess';

@injectable()
export default class Inversified extends Post {
  constructor () {
    super({
      chargingProcess: new PostChargingProcess(),
      title: new Title(),
      body: new Body(),
      date: new PostDate(),
    });
  }
}

customElements.define('app-post-inversified', Inversified);
