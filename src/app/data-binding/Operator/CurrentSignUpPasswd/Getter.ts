import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentSignUpPasswd, { DataType } from '@/src/app/data-binding/Model/CurrentSignUpPasswd';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpPasswd) model: CurrentSignUpPasswd,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.passwd;
  }
}
