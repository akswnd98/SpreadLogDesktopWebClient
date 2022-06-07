import RuleBaseGenerator from '@/src/app/data-binding/RuleBaseGenerator';
import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import Rule from '@/src/app/data-binding/RuleBaseGenerator/Rule';
import GuestPageRule from '@/src/app/data-binding/RuleBaseGenerator/Rule/GuestPageRule';
import GuestInterface from './Interface/Guest';

export default class Generator extends RuleBaseGenerator<void, any, void> {
  ruleInterfacePair: [Rule<void>, Interface<any, void>][] = [
    [new GuestPageRule(), new GuestInterface()],
  ];
}
