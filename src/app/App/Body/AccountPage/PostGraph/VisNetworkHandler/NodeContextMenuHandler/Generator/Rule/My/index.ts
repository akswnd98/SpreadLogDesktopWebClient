import Rule from '@/src/app/data-binding/RuleBaseGenerator/Rule';
import Static from '@/src/app/inversify.config';
import { RuleType } from '..';
import AccountGetter from '@/src/app/data-binding/Operator/Account/Getter';
import AccountPageNicknameGetter from '@/src/app/data-binding/Operator/AccountPageNickname/Getter';
import { SYMBOLS } from '@/src/app/symbols';

export default class MyRule extends Rule<RuleType> {
  check (param: RuleType) {
    return param.account.isLoggedIn && param.account.nickname === param.accountPageNickname;
  }
}
