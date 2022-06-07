import Interface from './Interface';
import Rule from './Rule';

export default abstract class RuleBaseGenerator<RuleParam, InterfaceParam, InterfaceReturn> {
  abstract ruleInterfacePair: [Rule<RuleParam>, Interface<InterfaceParam, InterfaceReturn>][];

  async generate (ruleParam: RuleParam, interfaceParam: InterfaceParam) {
    for (let i = 0; i < this.ruleInterfacePair.length; i++) {
      if (await this.ruleInterfacePair[i][0].check(ruleParam)) {
        return await this.ruleInterfacePair[i][1].generate(interfaceParam);
      }
    }
    return undefined;
  }
}
