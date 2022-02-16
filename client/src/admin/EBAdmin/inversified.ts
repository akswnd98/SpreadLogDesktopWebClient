import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import EBAdmin from '.';
import { SYMBOLS } from '../types';
import EBGraphVis from './EBGraphVis';

@injectable()
export default class Inversified extends EBAdmin {
  constructor (
    @inject(SYMBOLS.EBGraphVis) ebGraphVis: EBGraphVis,
  ) {
    super(ebGraphVis);
  }
}

customElements.define('eb-admin-inversified', Inversified);
