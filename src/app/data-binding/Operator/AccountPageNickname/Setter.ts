import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import AccountPageNickname, { DataType } from '../../Model/AccountPageNickname';
import { SYMBOLS } from '@/src/app/symbols';
import AccountPageNicknameNotifier from '../../Notifier/AccountPageNickname';

@injectable()
export default class Setter extends Operator<DataType> {
  notifier: AccountPageNicknameNotifier;

  constructor (
    @inject(SYMBOLS.AccountPageNickname) model: AccountPageNickname,
  ) {
    super({
      model,
    });
    this.notifier = new AccountPageNicknameNotifier();
  }

  async set (nickname: string) {
    this.data.nickname = nickname;
    await this.notifier.notify(undefined);
  }
}
