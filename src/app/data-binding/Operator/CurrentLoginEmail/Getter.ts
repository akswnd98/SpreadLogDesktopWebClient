import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { DataType } from '../../Model/CurrentLoginEmail';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentLoginEmail from '../../Model/CurrentLoginEmail';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentLoginEmail) model: CurrentLoginEmail,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.email;
  }
}
