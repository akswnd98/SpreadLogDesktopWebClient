import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Navigator from '.';
import { SYMBOLS } from '../../symbols';
import Logo from './Logo';

@injectable()
export default class Inversified extends Navigator {
  constructor () {
    super({
      logo: new Logo(),
    });
  }
}

customElements.define('app-navigator-inversified', Inversified);
