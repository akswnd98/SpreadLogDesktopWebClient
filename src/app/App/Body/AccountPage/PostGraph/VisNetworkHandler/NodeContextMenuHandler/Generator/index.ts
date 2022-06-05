import RuleBaseGenerator from '@/src/app/data-binding/RuleBaseGenerator';
import { RuleType } from './Rule';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import Rule from '@/src/app/data-binding/RuleBaseGenerator/Rule';
import MyRule from './Rule/My';
import MyInterface from './Interface/My';
import GuestRule from './Rule/Guest';

export default class Generator extends RuleBaseGenerator<RuleType, void, BasicContextMenuBody> {
  ruleInterfacePair: [Rule<RuleType>, Interface<void, BasicContextMenuBody>][] = [
    [new MyRule(), new MyInterface()],
  ];
}
