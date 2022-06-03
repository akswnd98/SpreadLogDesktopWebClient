import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import AccountPageNickname, { DataType } from '../../Model/AccountPageNickname';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.AccountPageNickname) model: AccountPageNickname,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.nickname;
  }
}
