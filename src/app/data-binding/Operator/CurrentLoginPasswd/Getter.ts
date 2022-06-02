import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import CurrentLoginPasswd, { DataType } from '../../Model/CurrentLoginPasswd';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentLoginPasswd) model: CurrentLoginPasswd,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.passwd;
  }
}
