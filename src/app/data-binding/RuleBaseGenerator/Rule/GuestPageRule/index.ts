import Rule from '@/src/app/data-binding/RuleBaseGenerator/Rule';
import Static from '@/src/app/inversify.config';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import AccountPageNicknameGetter from '@/src/app/data-binding/Operator/AccountPageNickname/Getter';
import { SYMBOLS } from '@/src/app/symbols';

export default class GuestPageRule extends Rule<void> {
  async check () {
    const accountPageNickname = Static.instance.get<AccountPageNicknameGetter>(SYMBOLS.AccountPageNicknameGetter).get();
    const account = Static.instance.get<AccountGetter>(SYMBOLS.AccountGetter).get();
    return !(account.isLoggedIn && account.nickname === accountPageNickname);
  }
}
