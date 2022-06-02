import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CurrentSignUpPasswd, { DataType } from '../../Model/CurrentSignUpPasswd';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpPasswd) model: CurrentSignUpPasswd,
  ) {
    super({
      model,
    });
  }

  set (passwd: string) {
    this.data.passwd = passwd;
  }
}
