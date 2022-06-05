import RuleBaseBinder from '@/src/app/data-binding/RuleBaseBinder';
import { RuleParam } from './Rule';
import Element from '@/src/owl-element/Element';
import Interface from '@/src/app/data-binding/RuleBaseBinder/Interface';
import Rule from '@/src/app/data-binding/RuleBaseBinder/Rule';
import AvatarRule from './Rule/Avatar';
import PeopleRule from './Rule/People';
import AvatarInterface from './Interface/Avatar';
import PeopleInterface from './Interface/People';
import { InterfaceParam } from './Interface';

export default class AccountAvatar extends RuleBaseBinder<RuleParam, InterfaceParam> {
  ruleInterfacePair: [Rule<RuleParam>, Interface<InterfaceParam>][] = [
    [new AvatarRule(), new AvatarInterface()],
    [new PeopleRule(), new PeopleInterface()],
  ];
}
