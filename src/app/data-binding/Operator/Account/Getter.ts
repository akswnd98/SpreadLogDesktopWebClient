import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import Account, { DataType } from '../../Model/Account';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.Account) model: Account,
  ) {
    super({
      model,
    });
  }

  get () {
    return {
      ...this.data,
    };
  }
}
