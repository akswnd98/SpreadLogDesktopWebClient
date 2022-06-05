import Interface from './Interface';
import Rule from './Rule';

export default abstract class RuleBaseBinder<RuleParam, InterfaceParam> {
  abstract ruleInterfacePair: [Rule<RuleParam>, Interface<InterfaceParam>][];

  async bind (ruleParam: RuleParam, interfaceParam: InterfaceParam) {
    for (let i = 0; i < this.ruleInterfacePair.length; i++) {
      if (await this.ruleInterfacePair[i][0].check(ruleParam)) {
        await this.ruleInterfacePair[i][1].bind(interfaceParam);
      }
    }
  }
}
