import RuleBaseGenerator from '@/src/app/data-binding/RuleBaseGenerator';
import BasicContextMenuBody from '@/src/elements/ContextMenuPopup/BasicContextMenuBody';
import Interface from '@/src/app/data-binding/RuleBaseGenerator/Interface';
import Rule from '@/src/app/data-binding/RuleBaseGenerator/Rule';
import MyInterface from './Interface/My';
import MyPageRule from '@/src/app/data-binding/RuleBaseGenerator/Rule/MyPageRule';

export default class Generator extends RuleBaseGenerator<void, void, BasicContextMenuBody> {
  ruleInterfacePair: [Rule<void>, Interface<void, BasicContextMenuBody>][] = [
    [new MyPageRule(), new MyInterface()],
  ];
}
