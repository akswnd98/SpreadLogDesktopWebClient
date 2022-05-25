import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CurrentLoginEmail, { DataType } from '../../Model/CurrentLoginEmail';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentLoginEmail) model: CurrentLoginEmail,
  ) {
    super({
      model,
    });
  }

  set (email: string) {
    this.data.email = email;
  }
}
