import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentSignUpNickname, { DataType } from '@/src/app/data-binding/Model/CurrentSignUpNickname';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpNickname) model: CurrentSignUpNickname,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.nickname;
  }
}
