import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentSignUpPasswdCheck, { DataType } from '@/src/app/data-binding/Model/CurrentSignUpPasswdCheck';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpPasswdCheck) model: CurrentSignUpPasswdCheck,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.passwdCheck;
  }
}
