import Rule from '@/src/app/data-binding/RuleBaseBinder/Rule';
import { RuleParam } from '..';

export default class Avatar extends Rule<RuleParam> {
  async check (param: RuleParam) {
    return param.isLoggedIn;
  }
}
