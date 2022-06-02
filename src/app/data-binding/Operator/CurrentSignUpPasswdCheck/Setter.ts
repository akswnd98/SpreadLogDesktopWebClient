import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CurrentSignUpPasswdCheck, { DataType } from '../../Model/CurrentSignUpPasswdCheck';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpPasswdCheck) model: CurrentSignUpPasswdCheck,
  ) {
    super({
      model,
    });
  }

  set (passwdCheck: string) {
    this.data.passwdCheck = passwdCheck;
  }
}
