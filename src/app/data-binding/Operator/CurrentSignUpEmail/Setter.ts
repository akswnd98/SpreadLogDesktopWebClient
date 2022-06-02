import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CurrentSignUpEmail, { DataType } from '../../Model/CurrentSignUpEmail';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpEmail) model: CurrentSignUpEmail,
  ) {
    super({
      model,
    });
  }

  set (email: string) {
    this.data.email = email;
  }
}
