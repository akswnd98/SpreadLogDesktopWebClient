import Rule from '@/src/app/data-binding/RuleBaseBinder/Rule';
import { RuleParam } from '..';

export default class People extends Rule<RuleParam> {
  async check (param: RuleParam) {
    return !param.isLoggedIn;
  }
}
