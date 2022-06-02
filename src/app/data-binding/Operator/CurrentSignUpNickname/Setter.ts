import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CurrentLoginNickname, { DataType } from '../../Model/CurrentSignUpNickname';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpNickname) model: CurrentLoginNickname,
  ) {
    super({
      model,
    });
  }

  set (nickname: string) {
    this.data.nickname = nickname;
  }
}
