import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentLoginPasswd, { DataType } from '../../Model/CurrentLoginPasswd';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentLoginPasswd) model: CurrentLoginPasswd,
  ) {
    super({
      model,
    });
  }

  set (passwd: string) {
    this.data.passwd = passwd;
  }
}
