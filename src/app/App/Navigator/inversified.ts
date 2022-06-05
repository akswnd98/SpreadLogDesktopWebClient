import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Navigator from '.';
import { SYMBOLS } from '../../symbols';
import Logo from './Logo';
import RightButton from './Right';

@injectable()
export default class Inversified extends Navigator {
  constructor (
    @inject(SYMBOLS.AppNavigatorRightButton) rightButton: RightButton,
  ) {
    super({
      logo: new Logo(),
      rightButton,
    });
  }
}

customElements.define('app-navigator-inversified', Inversified);
